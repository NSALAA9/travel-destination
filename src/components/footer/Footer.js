/*import React from "react";

function Footer() {
  return (
    <footer>
      <ul>
        <li><a href="https://www.facebook.com/">Facebook</a></li>
        <li><a href="https://www.instagram.com/?hl=en">Instagram</a></li>
        <li><a href="https://twitter.com/i/flow/login">Twitter</a></li>
      </ul>
      <p>© 2023, Ala'a Nsairat</p>
    </footer>
  );
}

export default Footer;*/



import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <a href="https://www.facebook.com/" style={styles.link}>
            Facebook
          </a>
        </li>
        <li style={styles.li}>
          <a href="https://www.instagram.com/?hl=en" style={styles.link}>
            Instagram
          </a>
        </li>
        <li style={styles.li}>
          <a href="https://twitter.com/i/flow/login" style={styles.link}>
            Twitter
          </a>
        </li>
      </ul>
      <p style={styles.p}>© 2023, Ala'a Nsairat</p>
    </footer>
  );
}

export default Footer;

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
  },
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10px",
  },
  li: {
    margin: "0 10px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1.2rem",
  },
  p: {
    margin: 0,
  },
};
