import React from 'react'
import { ReactComponent as SVG } from '../assets/svg-test.svg'

export default function Home() {
    return (
        <section className='centered-section' id='home-section' name='home-section'>
            
            {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum aut voluptatibus vero officiis repellendus harum nam dolorum vel nihil tempora blanditiis in, nemo quae. Delectus, tenetur? Asperiores quis soluta vitae.</p> */}
            {/* <div className='triangles-container'>
                <svg width="700" height="400" viewBox="0 0 990 553" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M889 553C894.523 553 899 548.523 899 543V104.431C899 96.9371 891.062 92.1059 884.406 95.5487L36.5056 534.118C27.1987 538.932 30.6216 553 41.0998 553H889Z" fill="#420B45" />
                    <path d="M91 9.99999C91 4.47714 95.4772 0 101 0H948.9C959.378 0 962.801 14.0683 953.494 18.8822L105.594 457.451C98.9381 460.894 91 456.063 91 448.569V9.99999Z" fill="#321856" />
                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="black">Hi, I'm Daniel Carrasco Full Stack Developer</text>
                </svg>
            </div> */}
            <div className='triangles-container'>
                <SVG />
            </div>
        </section>
    )
}
