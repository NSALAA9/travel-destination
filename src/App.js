/*import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Tours from './components/tours/Tours';
import Footer from './components/footer/Footer';
import tourData from './Data/db.json';


function App() {
  console.log(tourData);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    setTours(tourData);
  }, []);

  return (
    <div className="App">
      <Header />
      <Tours tours={tours} />
      <Footer />
    </div>
  );
}

export default App;*/


/*
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Tours from "./components/tours/Tours";
import TourDetails from "./components/TourDetails/TourDetails";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Link to="/">
            <h1>Travel Destination</h1>
          </Link>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/tours">Tours</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tours" component={Tours} />
            <Route path="/city/:id" component={TourDetails} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;*/





import React from "react";
import {Routes,Route} from 'react-router-dom';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Tours from "./components/tours/Tours";
import TourDetails from "./components/TourDetails/TourDetails";
import Footer from "./components/footer/Footer";
import tourData from "./Data/db.json";
import { dblClick } from "@testing-library/user-event/dist/click";
function App() {
  return (
    
      <div>
        <Routes>


        <Route path="/" element={<Home Data={tourData}/>}></Route>
        <Route path="/city/:id" element={<TourDetails toursdata={tourData}/>}></Route>


        
        </Routes>
      </div>
   
     
     
  );
}

export default App;


