import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { GiAbstract097 } from "react-icons/gi";

const HeaderNav = () => {
  return (
    <div className="flex justify-between items-center rounded-3xl backdrop-blur-3xl border border-white/10 text-white bg-black/30 h-[100px] px-20 mt-5 mx-10 shadow-2xl">
      <div className="flex items-center gap-2">
        <GiAbstract097 size={35} color="purple" />
        <h1 className="font-extrabold text-lg">Sayem's Components</h1>
      </div>

      <ul className="flex gap-10">
        <li>Home</li>
        <li>Components</li>
        <li>About</li>
      </ul>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <IoLogoGithub />
        GitHub
      </a>
    </div>
  );
};

export default HeaderNav;
