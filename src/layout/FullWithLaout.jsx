import React from "react";
import PreNavBar from "../components/partials/PreNavBar";
import NavBar from "../components/partials/NavBar";
import Footer from "../components/partials/Footer";
import PreFooter from "../components/Home/PreFooter";

const FullWithLaout = ({ children, previsible }) => {
  return (
    <div>
      <PreNavBar />
      <NavBar />
      {children}
      {previsible && <PreFooter />}
      <Footer />
    </div>
  );
};

export default FullWithLaout;
