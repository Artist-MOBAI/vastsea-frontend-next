import React from "react";
import * as m from "@/paraglide/messages";
import { ScrollA, ScrollB } from "./Scroll";

const NavBar = () => {
  return (
    <nav className="bg-vastsea-cyan h-64 w-screen border-y-4 border-vastsea-white">
      <div className="absolute bottom-0">
        <button className="ml-16 border-b-4 bg-vastsea-black p-4 font-pixel text-xl font-semibold">
          {m.nav_item1()}
        </button>
        <button className="border-b-4 border-l-4 bg-vastsea-black p-4 font-pixel text-xl">
          {m.nav_item2()}
        </button>
        <button className="border-b-4 border-l-4 bg-vastsea-black p-4 font-pixel text-xl">
          {m.nav_item3()}
        </button>
      </div>
      <div className="absolute flex -skew-y-12 flex-col">
        <ScrollA />
        <ScrollB />
        <ScrollA />
        <ScrollB />
        <ScrollA />
        <ScrollB />
      </div>
    </nav>
  );
};

export default NavBar;
