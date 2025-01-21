import style from "./nav.module.scss";
import React, { useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <>
      <nav className={style.navbar}>
        <img src='' alt='logo' />
        {/* Create an icon for your portfolio */}
        <ul className={style.navMenu}>
          <li>
            <AnchorLink href='#header' duration={1000}>
              Home
            </AnchorLink>
          </li>

          <li>
            <AnchorLink href='#about' offset='70' duration={1000}>
              About
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href='#experience' offset='70' duration={1000}>
              Experience
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href='#projects' offset='70' duration={1000}>
              Projects
            </AnchorLink>
          </li>
        </ul>
      </nav>

      <nav className={style.hamburgerNav}>
        <img src='' alt='logo' />
        <div className={style.hamburgerMenu}>
          <div
            className={`${style.hamburgerIcon} ${isOpen ? style.open : ""}`}
            onClick={toggleMenu}
          >
            {/* onClick={toggleMenu} */}
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`${style.menuLinks} ${isOpen ? style.open : ""}`}>
            {/* pass onclick toggle menu to each later */}
            <li>
              <AnchorLink href='#header' duration={1000} onClick={toggleMenu}>
                Home
              </AnchorLink>
            </li>

            <li>
              <AnchorLink
                href='#about'
                offset='70'
                duration={1000}
                onClick={toggleMenu}
              >
                About
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href='#experience'
                offset='70'
                duration={1000}
                onClick={toggleMenu}
              >
                Experience
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href='#projects'
                offset='70'
                duration={1000}
                onClick={toggleMenu}
              >
                Projects
              </AnchorLink>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;
