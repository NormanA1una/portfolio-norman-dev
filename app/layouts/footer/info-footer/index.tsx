import "./style.css";

import { Link } from "@remix-run/react";
import { H2 } from "~/components/typography/h2";

export const InfoSectionFooter = ({ pathNames }: InfoSectionFooterProps) => {
  return (
    <div className="info-footer-style">
      <div className="spacing-info">
        <H2 style={{ color: "#FCFCFC" }}>Sections</H2>
        <ul className="list-footer">
          {pathNames.map((pathName) => {
            return (
              <li key={pathName.name}>
                <Link to={pathName.pathName}>{pathName.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="spacing-info">
        <H2 style={{ color: "#FCFCFC" }}>Contact</H2>
        <ul className="list-footer">
          <li>normanlunadev@gmail.com</li>
          <li>(+505) 7690-7185</li>
        </ul>
      </div>
    </div>
  );
};
