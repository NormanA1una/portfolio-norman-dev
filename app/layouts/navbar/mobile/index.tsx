import "./style.css";

import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";

export const SideNav = ({ pathNames, currentLocation }: SideNavProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!document.body.classList.contains("overflow-hidden") && isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  return (
    <div className="principal-div">
      <button
        id="hamburguer-button"
        className={`hamburguer-btn-style`}
        role="button"
        aria-label="Trigger for hamburger button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div
          id="hamburguer-lines"
          className={`${
            currentLocation !== "/" ? "lines-button-black" : "lines-button"
          } ${isMenuOpen ? "lines-button-active" : ""}`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>

      <div
        id="navigation-h-menu"
        className={`offset-menu ${isMenuOpen ? "menu-active" : ""}`}
      >
        <ul id="list-nav" className="ul-mobile">
          {pathNames.map((pathName) => (
            <li key={pathName.name}>
              <Link
                to={pathName.pathName}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={
                  currentLocation === pathName.pathName
                    ? "link-active-mobile"
                    : "pending"
                }
              >
                {/* {lng === "en" ? pathName.name : pathName.nameSpanish} */}
                {pathName.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        id="bg-blur"
        className={`bg-blur-sidebar ${
          isMenuOpen ? "bg-blur-sidebar-active" : ""
        }`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></div>
    </div>
  );
};
