/*import React from "react";

import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
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
  );
}


export default Header;*/


import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <Link to="/" style={styles.link}>
              Home
            </Link>
          </li>
          <li style={styles.li}>
            <Link to="/tours" style={styles.link}>
              Tours
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

const styles = {
  header: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
  },
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
  },
  li: {
    margin: "0 10px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1.2rem",
  },
};
