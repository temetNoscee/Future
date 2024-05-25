import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/routers";
import { useLocation } from "react-router-dom";

const Layouts: React.FC = () => {
  const location = useLocation();
  const showHeaderAndFooter = location.pathname !== "/login";

  return (
    <>
      {showHeaderAndFooter && <Header />}
      <div>
        <Routers />
      </div>
      {showHeaderAndFooter && <Footer />}
    </>
  );
};

export default Layouts;
