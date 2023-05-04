import React from "react";
import tourData from "../../Data/db.json";

const Tours = () => {
  return (
    <div>
      {tourData.map((tour) => (
        <div key={tour.id}>
          <h2>{tour.name}</h2>
          <img src={tour.image} alt={tour.name} />
        </div>
      ))}
    </div>
  );
};

export default Tours;