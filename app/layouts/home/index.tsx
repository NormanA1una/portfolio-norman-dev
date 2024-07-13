import "./style.css";

import { H1 } from "~/components/typography/h1";
import { H2 } from "~/components/typography/h2";

export const Home = () => {
  return (
    <div
      className="home-bg-container"
      style={{ backgroundImage: "url(/images/largeTrianglesBg.svg)" }}
    >
      <div className="home-main-container">
        <div className="home-principal-texts">
          <div>
            <H1 variant="hero" style={{ color: "#FCFCFC" }}>
              <span className="span-style-greeting">Hi, I'm</span>
              <br />
              Norman Aranda Luna
              <br />
              <span className="text-5xl">Software engineer</span>
            </H1>
          </div>

          <div>
            <H2 style={{ color: "#d1cfcf", fontWeight: 400 }}>
              With over 2 years of experience. I invite you to take a look at my
              website to learn more about who I am and the projects I've worked
              on.
            </H2>
          </div>
        </div>

        <div>
          <img
            src="/images/animationHome.gif"
            alt="Man sitting at a desk writing code"
          />
        </div>
      </div>
    </div>
  );
};
