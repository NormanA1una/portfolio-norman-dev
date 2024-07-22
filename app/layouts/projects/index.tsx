import { Link } from "react-router-dom";
import "./style.css";

import { useEffect, useState } from "react";
import { H1 } from "~/components/typography/h1";
import { H3 } from "~/components/typography/h3";
import { H6 } from "~/components/typography/h6";
import { Paragraph } from "~/components/typography/paragraph";

export const Projects = () => {
  const [projectOpen, setProjectOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (projectOpen) {
      timer = setTimeout(() => {
        setShowContent(true);
      }, 150);
    } else {
      setShowContent(false);
    }
    return () => clearTimeout(timer);
  }, [projectOpen]);

  const renderProjectInfo = () => {
    return (
      <div>
        <div className="bg-[#7b7b7bbc] relative z-[1] flex flex-col px-4 pt-4 pb-9">
          <div>
            <H3
              variant="primary"
              style={{
                color: "#FCFCFC",
                fontWeight: 700,
              }}
            >
              IMMIGRATIONS DOCS LLC
            </H3>
            <H6 style={{ color: "#FCFCFC" }}>
              A website focused on sending immigration documents to be
              translated by experts.
            </H6>
          </div>
          <div>
            <button
              style={{ color: "#FCFCFC" }}
              onClick={(e) => e.stopPropagation()}
            >
              <Link to={"https://immigrationdocsllc.com/"} target="_blank">
                View website
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="projects" className="project-section-style">
      <div className="titles-spacing">
        <div>
          <H1>Projects</H1>
        </div>
        <div>
          <Paragraph>
            I have worked on a variety of projects that demonstrate my ability
            to solve complex problems and my commitment to quality. Here are
            some of my most significant projects
          </Paragraph>
        </div>
      </div>

      <div>
        <div
          className={`project-card-close ${
            projectOpen ? "project-card-open" : undefined
          }`}
          style={{ backgroundImage: "url(/images/IDLLC.webp)" }}
          onClick={() => setProjectOpen(!projectOpen)}
        >
          <div
            className={
              "bg-[#0000009b] absolute top-0 bottom-0 w-full rounded-lg"
            }
          />
          {projectOpen ? (
            showContent && renderProjectInfo()
          ) : (
            <div className="relative z-[1]">
              <H3
                variant="primary"
                style={{
                  color: "#FCFCFC",
                  fontWeight: 700,
                  fontSize: projectOpen ? "20px" : undefined,
                }}
              >
                IMMIGRATIONS DOCS LLC
              </H3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
