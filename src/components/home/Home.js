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

/*import React from "react";
import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";

function Home(props) {
  return (
    <div style={styles.container}>
      <Header />
      <Tours data={props.data} style={styles.Tours} />
      <Footer style={styles.Footer} />
    </div>
  );
}

export default Home;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 auto",
    maxWidth: "1200px",
    padding: "20px",
  },
  Tours: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  ToursItem: {
    border: "1px solid #ccc",
    borderRadius: "5px",
    overflow: "hidden",
  },
  ToursItemImg: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  ToursItemH2: {
    fontSize: "1.5rem",
    margin: "10px",
  },
  ToursItemP: {
    margin: "10px",
  },
  Footer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
  },
};*/
