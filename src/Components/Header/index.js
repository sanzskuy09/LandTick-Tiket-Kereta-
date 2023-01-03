import React from "react";
import "./header.scss";

import Logo from "../../Assets/Icon/Logo.svg";
import TextLogo from "../../Assets/Icon/Land-Tick.svg";

const index = () => {
  return (
    <div className="header-container">
      <div className="img-logo">
        <img src={TextLogo} alt="text-logo" />
        <img src={Logo} alt="Logo" />
      </div>
      <div className="button">
        <button className="btn-daftar">Daftar</button>
        <button className="btn-login">Login</button>
      </div>
    </div>
  );
};

export default index;
