import React from "react";
import { experience, projects } from "@/resume";

export default function HomePage() {
  return (
    <>
      <h1 className="title">Hey 👋 I’m Sena Oz. </h1>
      <p>
        I am a management information systems student at Bogazici University,
        also trying to be a software developer.
      </p>
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
