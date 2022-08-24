import React from 'react';
import './projectpage.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import vue from '../assets/vue-logo.svg'
import css from '../assets/css-logo.svg'


function ProjectPageWeatherCamper() {
	return (
		<div className="project-page">
			<Header />
			<main className="grid-container">
				<section>
					<h1>Weather Camper App</h1>
					<p>
						<span>I love React!</span> I learned it during my bootcamp at the Wild Code
						School, I keep discovering new possibilities every week with React
						and improving as a React specialist.
					</p>
					<p>
						But I'm one of the curious types, and I want to know how other
						Javascript frameworks can do the same things in another way. So I
						decided to give <span>Vue.jsy</span> a try via building a very simple
						mobile-oriented app that consumes a weather API. And tell the user
						if she/he can use her/his BBQ tonight, or if he/she will stay inside the
						camper.
					</p>
				</section>
				<section>
					<h2>Tech stack</h2>
					<p>
						The main focus of this app is the discovery of <span>Vue.js</span>, with the help
						of vanilla <span>CSS</span> and fetching the <span>Open Weather Map API</span>.
					</p>
				</section>
        <section className='logo-section'>
          <img src={vue} alt="vue logo" />
          <img src={css} alt="css logo" />
        </section>
				<section>
					<h2>Lessons learned</h2>
					<p>
						I find it always refreshing to get <span>out of my comfort zone</span> and do the
						things I am used to doing, like <span>data fetching</span>, but in another way.
						This is what I felt while doing this very simple app with functions
						and methods I never used like v-if, v-else, or v-method.
					</p>
					<p>
						It made me feel <span>more confident</span> about my ability to use another
						framework/library than React. Also, the Vue.js docs are super nice
						to read and understand.
					</p>
				</section>
				<img src="" alt="" />
			</main>
			<Footer />
		</div>
	);
}

export default ProjectPageWeatherCamper;
