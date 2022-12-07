import React from "react";

import { BsFillMoonStarsFill } from "react-icons/bs";

interface INavbarProps {
  onToggleTheme: () => unknown;
}

const Navbar = (props: INavbarProps) => {
  const { onToggleTheme } = props;

  return (
    <nav className="Navbar py-10 mb-12 flex justify-between md:px-20 lg:px-40">
      <a href="/">
        <h1 className="text-xl font-burtons dark:text-white">Pramodh</h1>
      </a>
      <ul className="flex items-center gap-3 md:gap-6">
        <li>
          <BsFillMoonStarsFill
            className="cursor-pointer text-2xl text-gray-800 dark:text-yellow-500"
            onClick={onToggleTheme}
          />
        </li>
        <li>
          <a
            href="/files/resume.pdf"
            download="Pramodh_Frontend_Engineer"
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
