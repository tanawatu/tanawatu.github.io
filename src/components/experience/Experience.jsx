import React from 'react';
import './experience.css';
import { GiCheckMark } from 'react-icons/gi';

function Experience() {
  return (
    <section id="experience">
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experinece__content">
            <article className="experience__details">
              <GiCheckMark className="experience__details-icon" />
              <div>
                <h4>Andoid Studio</h4>
              </div>
            </article>
            <article className="experience__details">
              <GiCheckMark className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience__details">
              <GiCheckMark className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <GiCheckMark className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <GiCheckMark className="experience__details-icon" />
              <div>
                <h4>TailwindCSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <GiCheckMark className="experience__details-icon" />
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className="experience__details">
              <GiCheckMark className="experience__details-icon" />
              <div>
                <h4>NextJS</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experinece__content">
            <article className="experience__details">
              <GiCheckMark className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
              </div>
            </article>
            <article className="experience__details">
              <GiCheckMark className="experience__details-icon" />
              <div>
                <h4>PHP</h4>
              </div>
            </article>
            <article className="experience__details">
              <GiCheckMark className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
              </div>
            </article>
            <article className="experience__details">
              <GiCheckMark className="experience__details-icon" />
              <div>
                <h4>NestJS</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
