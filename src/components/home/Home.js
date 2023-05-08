import React from "react";
import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";


function Home(props) {
  return (
    <div>
      <Header />
    
      <Tours data={props.data} />
      <Footer />
    </div>
  );
}

export default Home;