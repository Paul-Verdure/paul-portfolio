import React from 'react'
import avatar from '../assets/avatar.png'
import './about.scss'

function About() {
    return (
        <div className='about'>
            <h1>Hello there, I'm Paul. Front End <span>Developer.</span></h1>
            <section className='about-me'>
                <article>

                    <p>Before diving into software and web development, I co-founded and managed a <span>craft brewery</span>.
                        What I enjoyed most at the brewery was <span>building projects</span>, starting with an idea and a target, and work with <span>talented people</span> like marketing, business, and creative teams to make it shine and be successful.</p>
                    <p>
                        My passion and engagement in web development also find its origin in childhood, trying to figure out how to solve the <span>puzzle</span> of the Water Temple dungeon in The Legend Of Zelda: Ocarina of Time.
                        It is the same enjoyment I find in software development, dealing with <span>sata, logic and state management</span>.
                    </p>
                    <p>
                        Building nice and complete <span>web applications</span> is so much sweeter when it is shared within a team of talented individuals.
                        In the future, I am looking forward to work with great people and teams, to build interesting projects, and <span>learn new things.</span></p>
                </article>

                <img src={avatar} alt="Paul's avatar" />
            </section>
        </div>
    )
}

export default About