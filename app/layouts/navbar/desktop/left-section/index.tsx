import "./style.css";

import { useNavigate } from "@remix-run/react";
import { H1 } from "~/components/typography/h1";

export const LeftSectionNavbar = () => {
  const navigate = useNavigate();

  return (
    <div
      className="left-section-navbar"
      onClick={() =>
        navigate({
          pathname: "/",
        })
      }
    >
      <div>
        <img
          src="/images/moonIcon.svg"
          alt="Purple Moon in navbar"
          loading="eager"
          width={48}
          height={48}
        />
      </div>
      <H1 variant="nav" style={{ color: "#FCFCFC" }}>
        Norman Aranda Luna
      </H1>
    </div>
  );
};
