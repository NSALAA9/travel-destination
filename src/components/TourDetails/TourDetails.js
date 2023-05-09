/*import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../Data/db.json';
//import './TourDetails.css';

const TourDetails = (props) => {
  const { id } = useParams();
  const tour = props.toursdata.find((tour) => tour.id === id);
  const [showFullDescription, setShowFullDescription] = useState(false);

  if (!tour) {
    return <div>Loading...</div>;
  }

  const { name, image } = tour;

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <section className="tour-details">
      <div className="tour-details-image">
        <img src={image} alt={name} />
      </div>
      <div className="tour-details-info">
        <h2>{name}</h2>
        <div className="description">
          {showFullDescription ? (
            <p>{tour.info}</p>
          ) : (
            <>
              <p>{tour.info.slice(0, 200)}</p>
              <button onClick={toggleDescription}>See more</button>
            </>
          )}
          {showFullDescription && (
            <button onClick={toggleDescription}>See less</button>
          )}
        </div>
      </div>
    </section>
  );
};

export default TourDetails;*/

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../Data/db.json';

const TourDetails = (props) => {
  const { id } = useParams();
  const tour = props.toursdata.find((tour) => tour.id === id);
  const [showFullDescription, setShowFullDescription] = useState(false);

  if (!tour) {
    return <div>Loading...</div>;
  }

  const { name, image } = tour;

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ marginRight: '20px' }}>
        <img src={image} alt={name} style={{ width: '400px', height: 'auto' }} />
      </div>
      <div>
        <h2>{name}</h2>
        <div style={{ marginBottom: '20px' }}>
          {showFullDescription ? (
            <p>{tour.info}</p>
          ) : (
            <>
              <p>{tour.info.slice(0, 200)}</p>
              <button onClick={toggleDescription}>See more</button>
            </>
          )}
          {showFullDescription && (
            <button onClick={toggleDescription}>See less</button>
          )}
        </div>
      </div>
    </section>
  );
};

export default TourDetails;











/*

import React, { useState } from "react";
import Header from "../header/Header";
import { useParams } from 'react-router-dom';

function TourDetails(props) {
    const params =useParams();
    const TourId=params.id;
    let ArrayFilterdById = props.toursdata.filter(tuor => TourId === tuor.id);

    const inf = `${ArrayFilterdById[0]["name"]}, ` + `${ArrayFilterdById[0]["info"]}` + ` And the Price is: ${ArrayFilterdById[0]["price"]}`;
  
  
    
  const [showMore, setShowMore] = useState(false);

 
  

  return (
    <>
    <Header/>
    <div className='PlaceContainer'>
                {ArrayFilterdById.map((place) => {
                    return (

                        <div key={place.id}>
                            <div className='PlaceDiv'>
                                <img className='PlaceImg' src={place.image} alt={place.name}></img>
                                <h4 className='PlaceName'>{place.name}</h4>
                                <h6 className='infobox'>
                                    {showMore ? inf : `${inf.substring(0, 190)}`}
                                    <button className="btn" onClick={() => setShowMore(!showMore)}>
                                        {showMore ? "Show less" : "Show more"}
                                    </button>
                                </h6>

                            </div>
                        </div>
                    )
                })}


            </div>
    </> );

            }
export default TourDetails;
*/
