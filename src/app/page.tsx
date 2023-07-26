import React from "react";
import { experience, projects } from "@/resume";
import { GithubIcon, LinkedinIcon, TelagramIcon } from "../../public/icons";

export default function HomePage() {
  let fillColor = "rgb(87, 87, 87)";

  return (
    <>
      <h1 className="title">Hey 👋 I’m Sena Oz. </h1>
      <p>
        I am a senior management information systems student at Bogazici
        University, also trying to be a software developer.
      </p>

      <div className="contact-icons">
        <a href="https://www.linkedin.com/in/zsenaoz/" target="_blank">
          <LinkedinIcon fill={fillColor} />
        </a>
        <a href={"mailto:tazeyta@gmail.com"} target="_blank">
          <TelagramIcon fill={fillColor} />
        </a>
        <a href={"https://github.com/senaoz"} target="_blank">
          <GithubIcon fill={fillColor} />
        </a>
      </div>

      <div id="experience">
        <h3 className="subtitle">Experience</h3>
        <ol>
          {experience.map(({ title, firm, timePeriod, description }, index) => (
            <li key={index}>
              <div className="experience-header">
                <span className="project-label">{firm}</span>, {title}{" "}
                <span className="project-secondary-label">{timePeriod}</span>
              </div>
              <ul>
                {description?.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>

      <div id="projects">
        <h3 className="subtitle">Projects</h3>
        <ol>
          {projects.map(({ href, label, description, github }, index) => (
            <li key={index}>
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  key={index}
                  className="project-label"
                >
                  {label} 🔗
                </a>
              ) : (
                <span className="project-label">{label}</span>
              )}{" "}
              &nbsp;
              <span>{description}</span>
              {github && (
                <>
                  {" "}
                  &nbsp;
                  <a
                    href={github}
                    target="_blank"
                    className="project-secondary-label"
                  >
                    (Github)
                  </a>
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
