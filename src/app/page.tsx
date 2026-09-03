import React from "react";
import { experience, projects, skills } from "@/resume";
import { GithubIcon, LinkedinIcon, TelagramIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { personSchema } from "../../lib/schema";

export default function HomePage() {
  let fillColor = "rgb(87, 87, 87)";

  return (
    <>
      <JsonLd data={personSchema} />
      <h1 className="title">Hey 👋 I’m Sena Oz. </h1>
      <p>
        I am a Software Engineer passionate about creating impactful products.
        Always eager to learn and grow, I earned a Bachelor&apos;s degree in MIS
        from Bogazici University and pursued a Master&apos;s in Software
        Engineering. Currently, I work at{" "}
        <a href="https://maestra.ai" target="_blank" rel="noopener noreferrer">
          Maestra.ai
        </a>
        , contributing to innovative solutions.
      </p>

      <div className="contact-icons">
        <a href="https://www.linkedin.com/in/zsenaoz/" target="_blank" rel="noopener noreferrer">
          <LinkedinIcon fill={fillColor} />
        </a>
        <a href={"mailto:tazeyta@gmail.com"} target="_blank" rel="noopener noreferrer">
          <TelagramIcon fill={fillColor} />
        </a>
        <a href={"https://github.com/senaoz"} target="_blank" rel="noopener noreferrer">
          <GithubIcon fill={fillColor} />
        </a>
        {/*
        <a
          className="button"
          href="https://drive.google.com/file/d/1tm7OAPXkyWUXIkelqnVnyqumeQ202GPX/view?usp=share_link"
          target="_blank" rel="noopener noreferrer"
        >
          Resume in PDF format
        </a>
          */}
      </div>

      <section id="experience" aria-labelledby="experience-heading">
        <h2 className="subtitle" id="experience-heading">Experience</h2>
        <ol>
          {experience.map(
            ({ title, firm, timePeriod, description, link }, index) => (
              <li key={index}>
                <a className="experience-header" href={link} target="_blank" rel="noopener noreferrer">
                  <span className="project-label">{firm}</span>, {title}{" "}
                  <span className="project-secondary-label">{timePeriod}</span>
                </a>
                {description && (
                  <ul>
                    {description.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                )}
              </li>
            )
          )}
        </ol>
      </section>

      <section id="projects" aria-labelledby="projects-heading">
        <h2 className="subtitle" id="projects-heading">Projects</h2>
        <ol>
          {projects.map(({ href, label, description, github }, index) => (
            <li key={index}>
              {href ? (
                <a
                  href={href}
                  target="_blank" rel="noopener noreferrer"
                  key={index}
                  className="project-label"
                >
                  {label} 🔗
                </a>
              ) : (
                <span className="project-label">{label}</span>
              )}{" "}
              &nbsp;
              <span className="project-description">{description}</span>
              {github && (
                <>
                  {" "}
                  &nbsp;
                  <a
                    href={github}
                    target="_blank" rel="noopener noreferrer"
                    className="project-secondary-label"
                  >
                    (Github)
                  </a>
                </>
              )}
            </li>
          ))}
        </ol>
      </section>
      <section id="skills" aria-labelledby="skills-heading">
        <h2 className="subtitle" id="skills-heading">Skills</h2>
        <>
          {skills.map(({ title, list }, index) => (
            <p key={index}>
              <span className="project-secondary-label">{title}: </span>
              {list.map((i) => (
                <span key={i}>
                  {i}
                  {list.indexOf(i) !== list.length - 1 ? " - " : ""}
                </span>
              ))}
            </p>
          ))}
        </>
      </section>
    </>
  );
}
