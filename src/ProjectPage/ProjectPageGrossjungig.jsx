/* eslint-disable max-len */
import React from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import figma from '../assets/Figma-Icon.svg';
import github from '../assets/github-logo.png';
import mui from '../assets/mui-logo.png';
import react from '../assets/react-logo.png';
import './projectpage.scss';

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
            help refugees find temporary accommodation in European countries.
          </p>{' '}
          <p>
            I volunteered and helped Großjungig team transform their website to
            match its new purpose. It includes reshaping the header and landing
            page to display the different sections house providers and refugees
            can access. But also managing the translation logic to go from 2
            languages available on the website to 5 languages.
          </p>
        </section>
        <section>
          <h2>Tech stack</h2>
          <p>
            Grossjungig app is using a <span>React</span> front end with{' '}
            <span>Material UI</span> as a component library and CSS utilities.
            The back end part is built on Node.js and Express with a MongoDB
            database.
          </p>
          <p>
            We used <span>Github</span> as a version control system and{' '}
            <span>Figma</span> to share the design within the team.
          </p>
        </section>
        <section className="logo-section">
          <img src={react} alt="react logo" />
          <img src={mui} alt="mui logo" />
          <img src={github} alt="github logo" />
          <img src={figma} alt="figma logo" />
        </section>
        <section>
          <img
            src="https://res.cloudinary.com/dh4gqj1ym/image/upload/v1661436098/portfolio/Gro%C3%9Fjungig_-WG-Zimmer-_-Mitbewohner-Suche_-Mehrgenerationen-WG_vubilw.gif"
            alt="Work at Grossjungig 1"
          />
        </section>
        <section>
          <h2>Problems and solutions</h2>
          <p>
            <span>Communication</span> was key during this project, as
            Anastasia, founder and CEO of Grossjungig wanted to react quickly to
            be able to welcome the refugees.
          </p>
          <p>
            The Creative Team quickly created the new Figma files for the new
            design and the translation team produced{' '}
            <span>3 new languages </span>
            for every text on the website.
          </p>
          <p>
            As for me, I had to understand fast the React app
            <span> architecture</span> and read Material UI{' '}
            <span>documentation</span> to be able to change the design on the
            landing page, navigation, and footer.
          </p>
        </section>
        <section>
          <h2>Lessons learned</h2>
          <p>
            Working in an <span>English speaking environment</span> was
            something I particularly enjoyed during this time, as the team was
            international.
          </p>
          <p>
            Having to learn how to use Material UI and the translation system
            using JSON files was also a great exercise for my{' '}
            <span>learning skills</span>.
          </p>
          <p>
            Grossjungig&apos;s CTO had documented the company&apos;s GitHub
            pretty well, I was able to use the
            <span> branch and merge process</span> the right way. The
            <span> linter</span> also provided great guidelines to match the
            code guidelines.
          </p>
        </section>
        <section>
          <img
            src="https://res.cloudinary.com/dh4gqj1ym/image/upload/v1661436099/portfolio/Gro%C3%9Fjungig_-WG-Zimmer-_-Mitbewohner-Suche_-Mehrgenerationen-WG-_1__pbphmd.gif"
            alt="Work at Grossjungig 2"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ProjectPageGrossjungig;
