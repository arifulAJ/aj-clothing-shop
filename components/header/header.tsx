import React from "react";
import Menu from "./menu";
import SubMenu from "./subMenu";

const Header = async () => {
  return (
    <header>
      <nav>
        <Menu />
        <hr />
        <SubMenu />
      </nav>
    </header>
  );
};

export default Header;
