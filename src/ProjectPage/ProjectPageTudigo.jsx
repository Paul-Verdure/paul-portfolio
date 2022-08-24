import React from 'react';
import './projectpage.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import react from '../assets/react-logo.png'
import typescript from '../assets/ts-logo.svg'
import sass from '../assets/sass-logo.png'
import jest from '../assets/jest-logo.svg'
import rtl from '../assets/rtl-logo.png'
import gitlab from '../assets/gitlab-logo.svg'
import figma from '../assets/Figma-Icon.svg'



function ProjectPageTudigo() {
	return (
		<div className="project-page">
			<Header />
			<main className="grid-container">
				<section>
					<h1>Tudigo</h1>
					<p>
						Tudigo is a <span>FinTech</span> startup, helping small and
						medium-sized companies to finance their projects and individuals
						make impactful investments. They select companies on the basis of
						their growth perspective and value sustainable projects.
					</p>{' '}
					<p>
						I am a part of the <span>Product Team</span> who work closely with
						the creative team in order to create the most pleasant online user
						experience possible. That means ensuring beautiful projects are
						valued, and project's holders can share their vision and find{' '}
						<span>investors</span> to back their companies.
					</p>
				</section>
				<section>
					<h2>Tech stack</h2>
					<p>
						Tudigo has been built since the beginning on a PHP Symphony
						codebase. The main project for the dev team is to move all the key
						functionalities under a <span>React & Typescript</span> web app,
						using <span>SCSS</span> for styling.
					</p>
					<p>
						Implementing <span>Typescript</span> was challenging, but made us
						really confident in our code's strength. Unit Testing is made
						with the help of <span>Jest</span> and{' '}
						<span>React Testing Library</span>.
					</p>
					<p>
						We also used <span>GitLab</span> as our version control system, and{' '}
						<span>Figma</span> to share the design with the UX/UI team.
					</p>
				</section>
        <section className='logo-section'>
          <img src={react} alt="react logo" />
          <img src={typescript} alt="typescript logo" />
          <img src={sass} alt="sass logo" />
          <img src={jest} alt="jest logo" />
          <img src={rtl} alt="rtl logo" />
          <img src={gitlab} alt="gitlab logo" />
          <img src={figma} alt="figma logo" />
        </section>
				<img src="" alt="" />
				<section>
					<h2>Problems and solutions</h2>
          <p>
						One of the main challenges we had was to decide how to deal with the
						<span>state management</span> within our investor qualification path
					</p>
					<p>
						We considered Redux and Recoil, but decided to go with an all-react
						solution with <span>Context</span> and <span>Reducers</span>. It appears to be simpler to us,
						well suited to our application size, and doesn't have a big
						boilerplate included.
					</p>
				</section>
				<section>
					<h2>Lessons learned</h2>
					<p>
						Among the many things I learned at Tudigo, I am particularly happy
						to know how to better use <span>Git commands and workflow</span>{' '}
						within a team
					</p>
					<p>
						I am glad to have been charged with <span>testing</span> our various
						project, and component library, as I was able to try several testing
						libraries and choose the right one for our app.
					</p>
					<p>
						Finally, collaborating with the Creative Team and discussions around{' '}
						<span>UI/UX</span> were a great source of insights around these
						topics.
					</p>
				</section>
				<img src="" alt="" />
			</main>
			<Footer />
		</div>
	);
}

export default ProjectPageTudigo;
