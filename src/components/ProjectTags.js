import React from 'react';

export default function ProjectTags({ tags, filterProjects }) {

    return (
        <>
            <i className="fa-solid fa-filter"></i>
            <ul className="tags-list">
                <li className="marked" onClick={(e) => filterProjects(e, 'All')}>All</li>
                {tags.map((tag, index) => {
                    return <li className="tag-btn" key={index} onClick={(e) => filterProjects(e, tag)}>{tag}</li>
                })}
            </ul>
        </>

    )
}
