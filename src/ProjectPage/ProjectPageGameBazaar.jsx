import React from 'react';
import './projectpage.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import next from '../assets/next-logo.svg';
import graphQL from '../assets/GraphQL-logo.svg';
import styledComponents from '../assets/styled-components-logo.svg';

function ProjectPageGameBazaar() {
	return (
		<div className="project-page">
			<Header />
			<main className="grid-container">
				<section>
					<h1>Game Bazaar</h1>
					<p>
						I am always excited to <span>learn new things</span>. This is mainly
						the reason I enjoy this job so much. They are always new
						technologies coming up, improving the{' '}
						<span>developer experience</span> and extending possibilities.
					</p>{' '}
					<p>
						So I found an awesome course with a <span>stack</span> I was eager
						to learn and started a new project from scratch with these
						technologies. This is also an opportunity where I can have fun with
						some <span>new CSS knowledge</span> I acquired, presented in the
						shape of an e-commerce Retro Gaming App, as it is one of my
						passions.
					</p>
				</section>
				<section>
					<h2>Tech stack</h2>
					<p>
						I used <span>Next.js</span> for server side rendering, routing, and
						complete tooling along with <span>Context</span> for local state
						management.
					</p>
					<p>
						As an alternative to REST API and Ajax Calls, I discovered{' '}
						<span>GraphQL</span>, a query language for data that makes it
						possible to request only what you need onto the client.
					</p>
					<p>
						About styling, this was the occasion to try{' '}
						<span>Styled Components</span>, a flexible tool that attach styles
						to a reusable React Component, using tagged template litterals.
					</p>
				</section>
				<section className="logo-section">
					<img src={next} alt="next logo" />
					<img src={graphQL} alt="graphql logo" />
					<img src={styledComponents} alt="styled-compoenents logo" />
				</section>
				<section>
					<img
						src="https://res.cloudinary.com/dh4gqj1ym/image/upload/v1661457882/portfolio/Bazaar-Page-1-of-1-_1__xg02j8.gif"
						alt="Game Bazaar 1"
					/>
				</section>
				<section>
					<h2>Problems and solutions</h2>
					<p>
						One of the features I wanted to make was a <span>video play</span>{' '}
						on image hover for the items. I had concerns about quality,
						responsiveness, and loading for videos about one minute long.
						Fortunately, a tool like
						<span> Cloudinary</span> made it easier to manage images and videos
						and tackle these issues.
					</p>
					<p>
						The <span>design</span> was another tricky part, I wanted it to look
						nice, but needed inspiration and ideas. I found some on places like{' '}
						<span>Dribbble </span> or
						<span> Awwwards</span>, and mixed them to achieve this result.
					</p>
				</section>
				<section>
					<h2>Lessons learned</h2>
					<p>
						Apart from using techs like Next.js and GraphQL for the first time,
						I learn a lot from practicing React techniques and logic, like
						<span> Context</span>, or <span>custom Hooks</span>.
					</p>
					<p>
						<span>Data management</span> was another big lesson for me in this
						project, with various models and relations between them. When to
						query them, display and pass them through the application were big
						questions I needed to answer.
					</p>
				</section>
        <section>
          <img
					src="https://res.cloudinary.com/dh4gqj1ym/image/upload/v1661457885/portfolio/Bazaar-Page-1-of-1_xyabql.gif"
					alt="Game Bazaar 2"
				/>
        </section>
				
			</main>
			<Footer />
		</div>
	);
}

export default ProjectPageGameBazaar;
