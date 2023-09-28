import React, { FunctionComponent } from "react";

interface ProjectsProps {
  projects: {
    image: string;
    name: string;
    location: string;
    description: string;
  }[];
}

const Projects: FunctionComponent<ProjectsProps> = ({ projects }) => {
  return (
    <section id="section-4" className="section__our-work">
      <div className="our-work section-width__regular">
        <div className="our-work__header">
          <h2 className="section-header__heading">Our Work</h2>
          <div className="section-header__sub-heading">
            Check out some of our recent porjects
          </div>
        </div>
        <div className="our-work__work-card-wrapper">
          {projects.map((project) => (
            <div className="work-card">
              <div className="work-card__image">
                <img src={project.image} alt="" />
              </div>
              <div className="work-card__content">
                <div className="work-card__title work-card__text">
                  {project.name}
                </div>
                <div className="work-card__location work-card__text">
                  {project.location}
                </div>
                <div className="work-card__description work-card__text">
                  {project.description}
                </div>
              </div>
            </div>
          ))}
          <div className="our-work__see-more">
            <a href="/our-work.html" className="our-work__see-more-text"
              >See All Projects</a
            >
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
