import React, { useState, useEffect } from 'react';
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

export default App;


