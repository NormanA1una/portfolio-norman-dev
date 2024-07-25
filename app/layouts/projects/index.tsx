import "./style.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { H1 } from "~/components/typography/h1";
import { H3 } from "~/components/typography/h3";
import { H6 } from "~/components/typography/h6";
import { Paragraph } from "~/components/typography/paragraph";

const PROJECTS = [
  {
    title: "IMMIGRATIONS DOCS LLC",
    description:
      "A website focused on sending immigration documents to be translated by experts.",
    url: "https://immigrationdocsllc.com/",
    img: "url(/images/IDLLC.webp)",
  },
  {
    title: "TENNESSEE ROOTS TREE SERVICES",
    description:
      "Tennessee Roots Tree Services is dedicated to providing professional tree care services in Tennessee.",
    url: "https://www.tnrootstreecompany.com/",
    img: "url(/images/TNRTS.webp)",
  },
  {
    title: "SHUTTLE IT CONSULTING",
    description:
      "Digital solutions provider that assists you in crafting visually appealing websites while addressing company challenges.",
    url: "https://www.shuttleconsulting.com/",
    img: "url(/images/SHUTTLE.webp)",
  },
];

export const Projects = () => {
  const [projectOpenIndex, setProjectOpenIndex] = useState<number | null>(0);
  const [showContent, setShowContent] = useState(false);

  const toggleProject = (index: number) => {
    if (projectOpenIndex === index) {
      setProjectOpenIndex(null);
    } else {
      setProjectOpenIndex(index);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (projectOpenIndex !== null) {
      timer = setTimeout(() => {
        setShowContent(true);
      }, 150);
    } else {
      setShowContent(false);
    }
    return () => clearTimeout(timer);
  }, [projectOpenIndex]);

  type RenderProjectInfoProps = {
    title: string;
    description: string;
    url: string;
  };

  const renderProjectInfo = ({
    title,
    description,
    url,
  }: RenderProjectInfoProps) => {
    return (
      <div className="w-full">
        <div className="bg-[#7b7b7bbc] relative z-[1] flex flex-col px-4 pt-4 pb-9 w-full">
          <div>
            <H3
              variant="primary"
              style={{
                color: "#FCFCFC",
                fontWeight: 700,
              }}
            >
              {title}
            </H3>
            <H6 style={{ color: "#FCFCFC" }}>{description}</H6>
          </div>
          <div>
            <button
              style={{ color: "#FCFCFC" }}
              onClick={(e) => e.stopPropagation()}
            >
              <Link to={url} target="_blank">
                View website
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="projects" className="project-section-bg">
      <div className="project-section-style">
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

        <div className="flex flex-col lg:flex-row gap-6">
          {PROJECTS.map((project, i) => {
            const isOpen = projectOpenIndex === i;

            return (
              <div
                key={i}
                className={`project-card-close ${
                  isOpen ? "project-card-open" : undefined
                }`}
                style={{ backgroundImage: project.img }}
                onClick={() => {
                  toggleProject(i);
                }}
              >
                <div
                  className={
                    "bg-[#0000009b] absolute top-0 bottom-0 w-full rounded-lg"
                  }
                />
                {isOpen ? (
                  showContent &&
                  renderProjectInfo({
                    title: project.title,
                    description: project.description,
                    url: project.url,
                  })
                ) : (
                  <div className="relative z-[1] lg:-rotate-90">
                    <H3
                      variant="primary"
                      style={{
                        color: "#FCFCFC",
                        fontWeight: 700,
                        fontSize: isOpen ? "20px" : undefined,
                      }}
                    >
                      {project.title}
                    </H3>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
