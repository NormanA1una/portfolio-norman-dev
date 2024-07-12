import "./style.css";

import { InfoSectionFooter } from "./info-footer";
import { SocialSectionFooter } from "./social-footer";

export const Footer = ({ pathNames }: FooterProps) => {
  return (
    <footer className="footer-container-style">
      {/* Info Section */}
      <InfoSectionFooter pathNames={pathNames} />
      {/* Social Section */}
      <SocialSectionFooter />
    </footer>
  );
};
