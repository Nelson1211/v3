import { Link } from "gatsby";
import React, { Component } from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faBars from "@fortawesome/fontawesome-free-solid/faBars";
import Image from "./image";

class TopMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuClass: "",
    };
  }

  setToggleTopMenuClass = () => {
    const menuClass = this.state;
    console.log(menuClass);
    if (menuClass === "") {
      this.setState({
        menuClass: "toggled",
      });
    } else {
      this.setState({
        menuClass: "",
      });
    }
  };

  render = () => {
    const menuClass = this.state;
    const topMenuClass = `top-menu ${menuClass}`;
    return (
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
        <div className={topMenuClass}>
          <header-container>
            <div className="left" style={{ marginTop: `3rem` }}>
              <a href="#home"> Home </a>
            </div>
            <div className="left" style={{ marginTop: `3rem` }}>
              <a href="#about"> About Us </a>
            </div>
            <div className="left" style={{ marginTop: `3rem` }}>
              <a href="#team"> Our Team </a>
            </div>
            <div className="left" style={{ marginTop: `3rem` }}>
              <a href="#partners"> Our Partners </a>
            </div>
            <div className="left" style={{ marginTop: `3rem` }}>
              <a href="#events"> Events </a>
            </div>
            <div className="left" style={{ marginTop: `3rem` }}>
              <a href="#contact"> Contact </a>
            </div>
            <FontAwesomeIcon
              icon={faBars}
              className="top-menu-icon"
              style={{ color: `white`, marginTop: `3rem`, fontSize: 30 }}
              onClick={this.setToggleTopMenuClass}
            />
            <div className="clear-fix" />
          </header-container>
        </div>
      </container>
    );
  };
}

export default TopMenu;
