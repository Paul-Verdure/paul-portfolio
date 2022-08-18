import React from 'react';
import './projectpage.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function ProjectPageGrossjungig() {
	return (
		<div className="project-page">
			<Header />
			<main className="grid-container">
				<section>
					<h1>Grossjungig</h1>
					<p>
						Following the Ukrainian crisis, Großjungig startup decided to
						transform its model from a multi-generational co-living solution to
						help refugees to find temporary accommodation in European countries.
						
					</p>{' '}
					<p>
          I volunteered and helped Großjungig team transform their website to
						match its new purpose. It includes reshaping the header and landing page to
						display the different sections house providers and refugees can
						access to. But also managing the translation logic in order to go from 2
						languages available on the website to 5 languages.
					</p>
				</section>
				<section>
					<h2>Tech stack</h2>
					<p>
            Grossjungig app is using a <span>React</span> front end with <span>Material UI</span> as a component library and CSS utilities.
						The back end part is built on Node.js and Express with a MongoDB database.
					</p>
          <p>We used <span>Github</span> as a version control system and <span>Figma</span> to share the design within the team.</p>
				</section>
				<img src="" alt="" />
				<img src="" alt="" />
				<section>
					<h2>Problems and solutions</h2>
					<p>
						One of the main challenges we had was to decide how to deal with the
						state management within our investor qualification path
					</p>
					<p>
						We considered Redux and Recoil, but decided to go with an all-react
						solution with Context and Reducers. It appears to be simpler to us,
						well suited to our application size, and doesn't have a big
						boilerplate included.
					</p>
				</section>
				<section>
					<h2>Lessons learned</h2>
					<p>
						Among the many things I learned at Tudigo, I am particularly happy
						to know how to better use Git commands and workflow within a team.
					</p>
					<p>
						I am glad to have been charged with testing our various project, and
						component library, as I was able to try several testing libraries
						and choose the right one for our app.
					</p>
					<p>
						Finally, collaborating with the creative team and discussions around
						UI/UX were a great source of insights around these topics.
					</p>
				</section>
				<img src="" alt="" />
			</main>
			<Footer />
		</div>
	);
}

export default ProjectPageGrossjungig;
