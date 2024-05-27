import React from "react";
import "../Header/header.css";
import "../../App.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo-modified.png";
import { Container, Row } from "reactstrap";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav">
            <div className="logo">
              <img width="40" height="40" src={logo} alt="brand-logo" />
              <div>
                <h1>Future</h1>
              </div>
            </div>

            <div className="navigate">
              <ul className="menu">
                <li className="nav-item">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="shop">Shop</NavLink>
                </li>
              </ul>
            </div>

            <div className="menu-icons">
              <span className="cart-icon">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/fluency-systems-regular/48/shopping-bag--v1.png"
                  alt="shopping-bag--v1"
                />
                <span className="num">0</span>
              </span>
              <Link to="/login">
                <span className="user-icon">
                  <img
                    src="https://img.icons8.com/small/32/user.png"
                    alt="user"
                  />
                </span>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
