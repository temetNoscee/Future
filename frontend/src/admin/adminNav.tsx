import React from "react";
import { Container, Row } from "reactstrap";
import logo from "../assets/logo-modified.png";
import "../styles/adminNav.css";
import { NavLink, Outlet } from "react-router-dom";
const admin_nav = [
  {
    display: "Change quantity",
    path: "/dashboard/quantity",
  },
  {
    display: "Add-Product",
    path: "/dashboard/add-product",
  },
  {
    display: "Answer-Questions",
    path: "/dashboard/answer",
  },
];
const AdminNav: React.FC = () => {
  return (
    <>
      <header className="admin-header">
        <Container>
          <div className="admin--nav-wrapper">
            <div className="logo">
              <img src={logo} alt="" />
              <h1>Future</h1>
            </div>
            <div className="user">
              <img src="https://img.icons8.com/small/32/user.png" alt="user" />
            </div>
          </div>
        </Container>
      </header>

      <section className="admin-menu">
        <Container>
          <Row>
            <div className="admin-navigation">
              <ul className="admin-menu-list">
                {admin_nav.map((item, index) => (
                  <li className="admin-menu-list-item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__admin-menu" : " "
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </Row>
        </Container>
      </section>
      <section>
        <Outlet />
      </section>
    </>
  );
};

export default AdminNav;
