import React from 'react'

export default function Icons_sidebar() {

    const toGitHub = () => {
        return window.open("https://github.com/DaniPhilo?tab=repositories");
    }
    
    const toLinkedIn = () => {
        return window.open("https://www.linkedin.com/in/daniel-carrasco-casado/");
    }

    return (
        <aside>

            <ul className='icons-container'>
                <li><i className="fa-brands fa-github" onClick={toGitHub}></i></li>
                <li><i className="fa-brands fa-linkedin" onClick={toLinkedIn}></i></li>
                <li><div id='icons-line'></div></li>
            </ul>

        </aside>
    )
}
