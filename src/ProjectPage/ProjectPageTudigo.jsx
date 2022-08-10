import React from 'react';
import './projectpage.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function ProjectPageTudigo() {
	return (
		<div className="project-page">
			<Header />
			<main className="grid-container">
				<section>
					<h1>Tudigo</h1>
					<p>Tudigo is a FinTech startup, helping small and medium-sized companies to finance their projects and individuals make impactful investments. 
            They select companies on the basis of their growth perspective and value sustainable projects.
          </p>  <p>
            I am a part of the Product Team who work closely with the creative team in order to create the most pleasant online user experience possible. 
            That means ensuring beautiful projects are valued, and project's holders can share their vision and find investors to back their companies.</p>
				</section>
				<section>
					<h2>Tech stack</h2>
					<p>Tudigo has been built since the beginning on a PHP Symphony codebase. The main project for the 
            dev team is to move all the key functionalities under a <span>React & Typescript</span> web app, using <span>SCSS</span> for styling.
            </p>
            <p>
            Implementing <span>Typescript</span> was challenging, but made us really confident in the strength of our code.
            Unit Testing is made with the help of <span>Jest</span> and <span>React Testing Library</span>.
            </p>
				</section>
				<img src="" alt="" />
				<img src="" alt="" />
				<section>
					<h2>Problems and solutions</h2>
					<p>fffffff</p>
				</section>
				<section>
					<h2>Lessons learned</h2>
					<p>fffffff</p>
				</section>
				<img src="" alt="" />
			</main>
			<Footer />
		</div>
	);
}

export default ProjectPageTudigo;
