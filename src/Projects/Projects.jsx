import React from 'react';

import CardList from '../Cards/CardList';
import './projects.scss';

function Projects() {
  return (
    <div className="projects">
      <h1>Things I&apos;ve been working on</h1>
      <p>
        I still enjoy having some project to spend time on. Here are some of
        these works I&apos;ve been doing lately.
      </p>
      <CardList />
    </div>
  );
}
export default Projects;
