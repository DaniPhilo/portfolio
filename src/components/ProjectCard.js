import React from 'react'

export default function ProjectCard({ project, index }) {

    return (<>
        {index % 2 === 0 ?
            <div className='project-card-left'>
                <div className="project-img">
                    <a href={project.project_link} target="_blank"><img src={project.img} alt="" /></a>
                </div>
                <div className="project-info">
                    <div className="project-title">
                        <h3>{project.name}</h3>
                    </div>
                    <div className='project-description'>
                        {project.description}
                    </div>
                    <div className="project-techs">
                        <ul className="tech-list">
                            {project.technologies.map((tech, index) => {
                                return <li key={index}>{tech}</li>
                            })}
                        </ul>
                    </div>
                    <div className='gh-project-link'>
                        <a href={project.gh_link} target="_blank"><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
            </div>
            :
            <div className='project-card-right'>
                <div className="project-info">
                    <div className="project-title">
                        <h3>{project.name}</h3>
                    </div>
                    <div className='project-description'>
                        {project.description}
                    </div>
                    <div className="project-techs">
                        <ul className="tech-list">
                            {project.technologies.map((tech, index) => {
                                return <li key={index}>{tech}</li>
                            })}
                        </ul>
                    </div>
                    <div className='gh-project-link'>
                        <a href={project.gh_link} target="_blank"><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
                <div className="project-img">
                    <a href={project.project_link} target="_blank"><img src={project.img} alt="" /></a>
                </div>
            </div>
        }
    </>)
}
