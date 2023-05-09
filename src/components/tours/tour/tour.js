/*import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

function Tour({ tour }) {
  const { id } = useParams();
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const getDescriptionPreview = (description) => {
    return description.split("\n", 3).join("\n");
  };

  const getDescriptionFull = (description) => {
    return description.split("\n").map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ));
  };

  return (
    <div className="tour-card">
      <Link to={`/city/${tour.id}`}>
        <img src={tour.image} alt={tour.name} />
        <h2>{tour.name}</h2>
      </Link>
      {id && id === tour.id && (
        <div>
          <h3>Description:</h3>
          {showMore ? getDescriptionFull(tour.description) : getDescriptionPreview(tour.description)}
          <button onClick={toggleShowMore}>{showMore ? "See Less" : "See More"}</button>
        </div>
      )}
    </div>
  );
}

export default Tour;*/

//import { Link } from "react-router-dom";






/*
import React from 'react';
import { Link } from 'react-router-dom';
import './tour.css';

function Tour(props) {
    <div className='PlaceContainer'>
      {props.data3.map((place) => {

        return (
          <div key={place.id}>
            <Link to={`/city/${place.id}`} className='CardLink'  >

              <div className='PlaceDiv'>
                <img className='PlaceImg' src={place.image} alt={place.name}></img>
                <h4 className='PlaceName'>{place.name}</h4>
              </div><hr></hr>
            </Link>
            </div>
        )
      })}
    </div>
  
  }

export default Tour;*/


/*function Tour(props) {
    return (
        <>
        <Link to={`/city/${props.tour.id}`}>

            <div key={props.tour.id}>

                <h1>{props.tour.name}</h1>
                <img src={props.tour.image} alt={props.tour.name} />


            </div>

      </Link>
        </>
    )
}
export default Tour;*/


import React from "react";
import { Link } from "react-router-dom";

const Tour = ({ tour }) => {
  return (
    <Link to={`/city/${tour.id}`} style={styles.link}>
      <div style={styles.tourContainer}>
        <h1 style={styles.title}>{tour.name}</h1>
        <img style={styles.image} src={tour.image} alt={tour.name} />
      </div>
    </Link>
  );
};

export default Tour;

const styles = {
  link: {
    textDecoration: "none",
  },
  tourContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    overflow: "hidden",
    transition: "box-shadow 0.3s ease",
    cursor: "pointer",
  },
  title: {
    margin: "10px 0",
    fontSize: "1.5rem",
  },
  image: {
    width: "100%",
    height: "auto",
    marginBottom: "10px",
  },
};
