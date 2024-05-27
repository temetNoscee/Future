import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layouts: React.FC = () => {
  const location = useLocation();
  const showHeaderAndFooter = location.pathname !== "/login";

  return (
    <>
      {showHeaderAndFooter && <Header />}
      <div>
        <Outlet />
      </div>
      {showHeaderAndFooter && <Footer />}
    </>
  );
};

export default Layouts;
