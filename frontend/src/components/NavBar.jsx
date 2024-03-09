import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMiniXMark } from "react-icons/hi2";
import { FaBars } from "react-icons/fa6";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);
  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Project", path: "/project" },
    { link: "Contact", path: "/contact" },
  ];
  return (
    <header className="w-full bg-transparent fixed top-0 right-0 transition-all ease-in duration-300 ">
      <nav
        className={`py-4 lg:px-24 px-4 ${
          isSticky ? "sticky top-0 left-0 bg-blue-300" : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <ul className="md:flex space-x-12 hidden mx-44">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-base  cursor-pointer hover:text-blue-700 text-amber-500 font-bold text-xl"
              >
                {link}
              </Link>
            ))}
          </ul>
          <div className="space-x-12 hidden lg:flex items-center">
            <button className="w-5 hover:text-blue-700">
              <FaBars />
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus: outline-none"
            >
              {isMenuOpen ? (
                <HiMiniXMark className="h-5 w-5 text-black" />
              ) : (
                <FaBars className="h-5 w-5 text-black" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`space-x-4 px-4 mt-16 py-7 bg-blue-700 ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className="block text-base text-white uppercase cursor-pointer"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
