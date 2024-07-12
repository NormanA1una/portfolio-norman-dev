import "./style.css";

import { Link } from "@remix-run/react";

export const RightSectionNavbar = ({
  currentLocation,
  pathNames,
}: RightSectionNavbarProps) => {
  return (
    <nav className="hidden lg:block">
      <ul className="ul-navigation-style">
        {pathNames.map((pathName) => {
          return (
            <li key={pathName.name} className="li-style-group group">
              <Link
                to={pathName.pathName}
                className={
                  currentLocation === pathName.pathName
                    ? "link-active-desktop"
                    : "pending"
                }
              >
                {currentLocation !== pathName.pathName ? (
                  <span className="link-span-animated"></span>
                ) : undefined}
                {/* {lng === "en" ? pathName.name : pathName.nameSpanish} */}
                {pathName.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
