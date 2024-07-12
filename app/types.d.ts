/* Main Layout */
type PathName = {
  name: string;
  nameSpanish: string;
  pathName: string;
};

type MainLayoutProps = {
  pathNames: PathName[];
  lng?: string;
};

/* Navbar */

type NavbarProps = MainLayoutProps & {
  currentLocation: string;
};

type RightSectionNavbarProps = NavbarProps;

/* Sidenav */

type SideNavProps = NavbarProps;

/* Footer */

type FooterProps = MainLayoutProps;

type InfoSectionFooterProps = FooterProps;
