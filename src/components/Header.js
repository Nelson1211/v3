import { Link } from "gatsby";
import React from "react";
import Image from "./image";

const Header = () => (
  <container>
    <div
      style={{
        maxWidth: `100px`,
        marginBottom: `1.45rem`,
        marginTop: `1.45rem`,
        marginLeft: `1.45rem`,
      }}
    >
      <Link to="/">
        <Image />
      </Link>
    </div>
    <header-container>
      <div style={{ marginTop: `4rem` }}>
        <a href="#home"> Home </a>
      </div>
      <div style={{ marginTop: `4rem` }}>
        <a href="#about"> About Us </a>
      </div>
      <div style={{ marginTop: `4rem` }}>
        <a href="#team"> Our Team </a>
      </div>
      <div style={{ marginTop: `4rem` }}>
        <a href="#partners"> Our Partners </a>
      </div>
      <div style={{ marginTop: `4rem` }}>
        <a href="#events"> Events </a>
      </div>
      <div style={{ marginTop: `4rem` }}>
        <a href="#contact"> Contact </a>
      </div>
    </header-container>
  </container>
);

export default Header;
