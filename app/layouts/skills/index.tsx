import { H1 } from "~/components/typography/h1";
import { H2 } from "~/components/typography/h2";

const skills = [
  { alt: "JavaScript", path: "/images/jsIcon.svg" },
  { alt: "TypeScript", path: "/images/tsIcon.svg" },
  { alt: "CSS", path: "/images/cssIcon.svg" },
  { alt: "TailwindCSS", path: "/images/tailwindIcon.svg" },
  { alt: "NodeJS", path: "/images/nodeJsIcon.svg" },
  { alt: "Express", path: "/images/expressIcon.svg" },
  { alt: "NestJS", path: "/images/nestJsIcon.svg" },
  { alt: "Angular", path: "/images/angularIcon.svg" },
  { alt: "React", path: "/images/reactIcon.svg" },
  { alt: "NextJS", path: "/images/nextIcon.svg" },
  { alt: "Remix", path: "/images/remixIcon.svg" },
  { alt: "Astro", path: "/images/astroIcon.svg" },
  { alt: "PostgreSQL", path: "/images/postgreIcon.svg" },
  { alt: "Git", path: "/images/gitIcon.svg" },
  { alt: "Postman", path: "/images/postmanIcon.svg" },
  { alt: "Nginx", path: "/images/nginxIcon.svg" },
];

export const Skills = () => {
  return (
    <div
      id="skills"
      className="px-6 pt-20 pb-10 flex flex-col gap-8 bg-[#7b7b7b]/[10%]"
    >
      <div className="flex flex-col gap-6">
        <div>
          <H1 variant="primary">Technical Skills</H1>
        </div>
        <div>
          <H2 style={{ color: "#464646", fontWeight: 400 }}>
            With a solid background in develop web application and experience in
            various technologies like React, Node.js, and MySQL, I am dedicated
            to building solutions that make a difference. Explore my work and
            see how I can help you take your next project to the next level.
          </H2>
        </div>
      </div>

      <div className="grid grid-cols-2 justify-items-center gap-y-6">
        {skills.map((skill) => {
          return (
            <div
              key={skill.alt}
              className="hover:scale-125 transition ease-in-out duration-[0.3s]"
            >
              <img src={skill.path} alt={skill.alt} height={70} width={70} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
