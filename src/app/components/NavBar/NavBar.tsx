"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MenuItem } from "./MenuItem";

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
        }`}
    >
      <div className="flex items-center justify-between w-full px-6 md:px-12 py-4">
        {/* Logo */}
        <Image src="/images/logo/teodev_dark.webp" alt="TEODEV Logo" height={30} width={180} priority />

        {/* Menú Desktop */}
        <div className="hidden md:flex">
          <MenuItem />
        </div>

        {/* Menú Móvil */}
        <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* Dropdown Menú en Móvil */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-black/90 py-4">
          <MenuItem onClick={() => setMenuOpen(false)} />
        </div>
      )}
    </nav>
  );
};
