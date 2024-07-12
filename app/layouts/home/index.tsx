import "./style.css";

import { H1 } from "~/components/typography/h1";
import { H2 } from "~/components/typography/h2";

export const Home = () => {
  return (
    <div
      className="home-bg-container"
      style={{ backgroundImage: "url(/images/largeTrianglesBg.svg)" }}
    >
      <div className="px-4 py-10">
        <div className="flex flex-col justify-center gap-4">
          <div>
            <H1 variant="hero" style={{ color: "#FCFCFC" }}>
              <span className="text-2xl">Hi, I'm</span>
              <br />
              Norman Aranda Luna
            </H1>
          </div>

          <div>
            <H2 style={{ color: "#d1cfcf", fontWeight: 400 }}>
              Software engineer with over 2 years of experience. I invite you to
              take a look at my website to learn more about who I am and the
              projects I've worked on.
            </H2>
          </div>
        </div>
      </div>
    </div>
  );
};
