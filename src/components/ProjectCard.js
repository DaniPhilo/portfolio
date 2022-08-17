import React from 'react'

export default function ProjectCard({ project, index }) {

    return (<>
            {index % 2 === 0 ?
                <div className='project-card-left'>
                    <div className="project-img">
                        <img src={project.img} alt="" />
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
                    </div>
                    <div className="project-img">
                        <img src={project.img} alt="" />
                    </div>
                </div>
            }
        </>)
}
