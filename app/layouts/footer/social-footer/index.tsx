import "./style.css";

import { useNavigate } from "@remix-run/react";
import { H1 } from "~/components/typography/h1";
import { Paragraph } from "~/components/typography/paragraph";
import { Link } from "react-router-dom";
import { H5 } from "~/components/typography/h5";

export const SocialSectionFooter = () => {
  const navigate = useNavigate();
  return (
    <div className="principal-social-footer">
      <div className="img-footer-container">
        <div
          className="img-section-footer"
          onClick={() =>
            navigate({
              pathname: "/",
            })
          }
        >
          <div>
            <img
              src="/images/moonIcon.svg"
              alt="Purple Moon in footerr"
              loading="lazy"
              width={48}
              height={48}
            />
          </div>
          <H1 variant="nav" style={{ color: "#FCFCFC" }}>
            Norman Aranda Luna
          </H1>
        </div>
        <Paragraph style={{ color: "#d1cfcf" }}>
          Working with enthusiasm and learning every day.
        </Paragraph>
      </div>

      <div>
        <ul className="social-media-list">
          <li>
            <Link to={"https://github.com/NormanA1una"} target="_blank">
              <img
                height={30}
                width={30}
                src="/images/githubIcon.svg"
                alt="Github Icon in footer"
              />
            </Link>
          </li>
          <li>
            <Link
              to={"https://www.linkedin.com/in/normanaluna"}
              target="_blank"
            >
              <img
                height={30}
                width={30}
                src="/images/linkedinIcon.svg"
                alt="LinkedIn Icon in footer"
              />
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <H5 style={{ color: "#FCFCFC" }}>
          Copyright © Norman Aranda Luna 2024 All Rights Reserved
        </H5>
      </div>
    </div>
  );
};
