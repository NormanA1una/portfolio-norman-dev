import { Outlet, useLocation } from "@remix-run/react";
import { Navbar } from "../navbar/desktop";
import { Footer } from "../footer";

export default function MainLayout({ pathNames }: MainLayoutProps) {
  const location = useLocation();

  return (
    <>
      <Navbar pathNames={pathNames} currentLocation={location.hash} />
      <Outlet />
      <Footer pathNames={pathNames} />
    </>
  );
}
