import React from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import figma from '../assets/Figma-Icon.svg';
import gitlab from '../assets/gitlab-logo.svg';
import jest from '../assets/jest-logo.svg';
import react from '../assets/react-logo.png';
import rtl from '../assets/rtl-logo.png';
import sass from '../assets/sass-logo.png';
import typescript from '../assets/ts-logo.svg';
import './projectpage.scss';

function ProjectPageFieldbox() {
  return (
    <div className="project-page">
      <Header />
      <main className="grid-container">
        <section>
          <h1>Fieldbox</h1>
          <p>
            At Fieldbox, we harness the potential of <span>data science</span>{' '}
            and AI to empower clients with valuable{' '}
            <span>data-driven assets</span>data-driven assets, providing them
            with a competitive edge through <span>innovative applications</span>
            .
          </p>{' '}
          <p>
            As a Frontend Engineer within the <span>Build team</span>,
            I&rsquo;ve worked on projects across industries like energy and
            construction, undertaking responsibilities such as developing
            projects from scratch, or improving existing ones. But also evolving
            within a <span>multidisciplinary team</span>multidisciplinary team,
            such as data scientists, backend engineers, and DevOps.
          </p>
        </section>
        <section>
          <h2>Tech stack</h2>
          <p>
            Every project is different, but most of the time our starter kit is
            <span>Vite</span> with <span>React</span>, <span>Typescript</span>,
            and <span>Less</span>. We use <span>Ant Design</span> as a UI
            library along with our own component library. As most applications
            require data visualization, we use <span>Ant Design Charts</span>.
            Our version control system and CI/CD are handled by{' '}
            <span>Gitlab</span>Gitlab.
          </p>
        </section>
        <section className="logo-section">
          <img src={react} alt="react logo" />
          <img src={typescript} alt="typescript logo" />
          <img src={sass} alt="sass logo" />
          <img src={jest} alt="jest logo" />
          <img src={rtl} alt="rtl logo" />
          <img src={gitlab} alt="gitlab logo" />
          <img src={figma} alt="figma logo" />
        </section>
        <section>
          <img
            src="https://res.cloudinary.com/dh4gqj1ym/image/upload/v1661433410/portfolio/tudigo-1_essegr.gif"
            alt="Work at Fieldbox"
          />
        </section>
        <section>
          <h2>Problems and solutions</h2>
          <p>
            There are as many challenges as there are projects, but I will focus
            on the most common ones. When workong on a project that relies on a
            lots of data, it is important to have a good understanding of the
            <span>data structure</span> and the way it is handled by the
            backend. The <span>communication</span> with the backend team is key
            to avoid any misunderstanding and receive the data in the right
            format to proceed with the development.{' '}
            <span>Data vizualisation</span> is also a big part of our work, and
            we have to go deep in the discussion with the client to understand
            what they want to see and how they want to see it. We also have to
            make sure that the data is displayed in a way that is easy to
            understand and that the user can interact with it.
          </p>
        </section>
        <section>
          <h2>Lessons learned</h2>
          <p>
            I learned many things at Fieldbox, but I am particularly happy to be
            able to use <span>data visualization</span> libraries like Ant
            Design Charts in an efficient way which corresponds to the{' '}
            <span>client&apos;s needs</span>.
          </p>
          <p>
            Being <span>responsible</span>responsible for the frontend part of a
            project also taught me how to better <span>communicate</span> with
            the client and the backend team to make sure we are all on the same
            page.
          </p>
          <p>
            Finally, I used different <span>state management solutions</span>{' '}
            like Redux, Zustand, or React Context, and I am now able to choose
            the right one for each project, depending on its size and
            complexity.
          </p>
        </section>
        <section>
          <img
            src="https://res.cloudinary.com/dh4gqj1ym/image/upload/v1661433408/portfolio/tudigo-2_q1ftbh.gif"
            alt="Work at Fieldbox 2"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ProjectPageFieldbox;
