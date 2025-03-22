import React from "react";
import Logo from '../../imgs/logo_site.png';

const Header = () => (
  <header className="p-4 text-center">
    <img src={Logo} alt="TOUCHminds Logo" className="w-20 h-auto mx-auto" />
  </header>
);

export default Header;