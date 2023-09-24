/* eslint-disable max-len */
import React from 'react';

import Card from './Card';
import './cards.scss';

function CardList() {
  const list = [
    {
      id: 1,
      title: 'Working at Fieldbox.ai',
      description:
        'About my experience as a React Typescript developer at Fieldbox.ai, a data science company.',
      img: 'https://res.cloudinary.com/dh4gqj1ym/image/upload/v1659805380/portfolio/tudigo_fnuomv.png',
      link: '/Fieldbox',
    },
    {
      id: 2,
      title: 'Working at Tudigo',
      description:
        'About my experience as a React Typescript developer at Tudigo, a FinTech company.',
      img: 'https://res.cloudinary.com/dh4gqj1ym/image/upload/v1659805380/portfolio/tudigo_fnuomv.png',
      link: '/Tudigo',
    },
    {
      id: 3,
      title: 'Volunteer at Grossjungig',
      description:
        'What I learned while working in a multicultural team to help Grossjunigig, a German startup.',
      img: 'https://res.cloudinary.com/dh4gqj1ym/image/upload/v1661436458/portfolio/Capture_d_%C3%A9cran_du_2022-08-25_16-07-21_rm5isk.png',
      link: '/Grossjungig',
    },
    {
      id: 4,
      title: 'Gaming Bazaar',
      description: 'An e-commerce application build with Next.js and GraphQL',
      img: 'https://res.cloudinary.com/dh4gqj1ym/image/upload/v1661457881/portfolio/Bazaar_ibmqyq.png',
      link: '/GameBazaar',
    },
  ];

  return (
    <div className="card-list">
      {list.map((card) => (
        <Card
          title={card.title}
          id={card.id}
          description={card.description}
          image={card.img}
          link={card.link}
        />
      ))}
    </div>
  );
}

export default CardList;
