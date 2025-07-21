"use client";

import React, { useState } from "react";
import { HeaderItem } from "@/app/Types/Header";
import HeaderItems from "@/app/Constants/HeaderItems.json";
import styles from "./Header.module.css";
import { useRouter } from "next/navigation";
import KaptiaLogo from "@/app/Assets/Images/KaptiaLogo.png";

const Header: React.FC = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    router.push("/");
  };

  const handleLoginClick = () => {
    // Handle login functionality here
    router.push("/login");
  };

  const handleItemClick = (item: HeaderItem) => {
    if (item.title === "Iniciar Sesión") {
      handleLoginClick();
    } else {
      // Handle navigation for other items
      if (item.link.startsWith("#")) {
        // Smooth scroll to section
        const element = document.querySelector(item.link);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to page using Next.js router
        router.push(item.link);
      }
    }
    // Close mobile menu after clicking
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <img
          src={KaptiaLogo.src}
          alt="Logo"
          className={styles.logo}
          onClick={handleLogoClick}
        />

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {HeaderItems.headerItems.map((item: HeaderItem, index: number) => (
            <div key={index}>
              {item.title === "Iniciar Sesión" ? (
                <button
                  className={styles.loginButton}
                  onClick={() => handleItemClick(item)}
                >
                  {item.title}
                </button>
              ) : (
                <a
                  href={item.link}
                  className={styles.navItem}
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick(item);
                  }}
                >
                  {item.title}
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Hamburger Menu */}
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`${styles.hamburgerLine} ${
              isMenuOpen ? styles.open : ""
            }`}
          ></span>
          <span
            className={`${styles.hamburgerLine} ${
              isMenuOpen ? styles.open : ""
            }`}
          ></span>
          <span
            className={`${styles.hamburgerLine} ${
              isMenuOpen ? styles.open : ""
            }`}
          ></span>
        </button>

        {/* Mobile Navigation Menu */}
        <nav className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ""}`}>
          {HeaderItems.headerItems.map((item: HeaderItem, index: number) => (
            <div key={index}>
              {item.title === "Iniciar Sesión" ? (
                <button
                  className={styles.mobileLoginButton}
                  onClick={() => handleItemClick(item)}
                >
                  {item.title}
                </button>
              ) : (
                <a
                  href={item.link}
                  className={styles.mobileNavItem}
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick(item);
                  }}
                >
                  {item.title}
                </a>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
