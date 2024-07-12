import "./style.css";

import { LeftSectionNavbar } from "./left-section";
import { SideNav } from "../mobile";
import { RightSectionNavbar } from "./right-section";

export const Navbar = ({ pathNames, currentLocation }: NavbarProps) => {
  return (
    <header className="navbar-style">
      {/* Left section */}
      <LeftSectionNavbar />

      {/* Right section */}
      <RightSectionNavbar
        currentLocation={currentLocation}
        pathNames={pathNames}
      />

      {/* Sidenav */}
      <SideNav currentLocation={currentLocation} pathNames={pathNames} />
    </header>
  );
};
