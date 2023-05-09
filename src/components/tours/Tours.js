/*import React from "react";
import tourData from "../../Data/db.json";
import Tour from "./tour/tour";
const Tours = () => {
  return (
    <div>
      {tourData.map((tour) => {
         return (
            <> 
            <Tour  tour={tour}/>
            </>
           )
      }
        
       
       
    )}
    </div>
  );
};

export default Tours;*/



/*
import React from "react";
import Tour from "./tour/tour";
import tourData from "../../Data/db.json";
import "./Tours.css";
import { Link } from "react-router-dom";


function Tours(props) {
    return (
    
        <div className="title">
          <h2>Our Tours</h2>
          <div className="Most visited places"></div>
          <Tour data={props.data}/>
        </div>
       

    );
  }

export default Tours;*/

import React from "react";
import tourData from "../../Data/db.json";
import Tour from "./tour/tour";

const Tours = () => {
  return (
    <div style={styles.toursContainer}>
      {tourData.map((tour) => {
        return (
          <div style={styles.tourWrapper} key={tour.id}>
            <Tour tour={tour} />
          </div>
        );
      })}
    </div>
  );
};

export default Tours;

const styles = {
  toursContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "50px 0",
  },
  tourWrapper: {
    marginBottom: "50px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
    borderRadius: "10px",
    overflow: "hidden",
  },
};
