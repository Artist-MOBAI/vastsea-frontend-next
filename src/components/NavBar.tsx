import React from "react";
import * as m from "@/paraglide/messages";
import Button from "./ui/header/button";
import Logo from "./ui/header/logo";

const NavBar = () => {
  return (
    <nav className="flex flex-row">
      <Logo />
      <Button message={m.nav_item1()} />
      <Button message={m.nav_item2()} />
      <Button message={m.nav_item3()} />
    </nav>
  );
};

export default NavBar;
