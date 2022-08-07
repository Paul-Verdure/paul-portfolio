import React from 'react'
import Card from './Card'
import './cards.scss'


function CardList() {

const list = [
{
    id: 1,
    title: 'Working at Tudigo',
    description: 'About my experience as a React Typescript developer at Tudigo, a FinTech company.',
    img: 'https://res.cloudinary.com/dh4gqj1ym/image/upload/v1659805380/portfolio/tudigo_fnuomv.png',
    link: '/Tudigo'
},
{
  id: 2,
  title: 'Volunteer at Grossjungig',
  description: 'What I learned while working in a multicultural team to help Grossjunigig, a German startup.',
  img: 'https://res.cloudinary.com/dh4gqj1ym/image/upload/v1659875937/portfolio/grossjungig_elo2gs.png',
  link: '/Grossjungig'
},
{
  id: 3,
  title: 'Gaming Bazaar',
  description: 'An e-commerce application build with Next.js and GraphQL',
  img: 'https://res.cloudinary.com/dh4gqj1ym/image/upload/v1659875937/portfolio/grossjungig_elo2gs.png',
  link: '/Grossjungig'
},

{
  id: 4,
  title: 'Weather Camper App',
  description: 'A mobile app in Vue.js to help you decide where to park your camper',
  img: 'https://res.cloudinary.com/dh4gqj1ym/image/upload/v1659875937/portfolio/grossjungig_elo2gs.png',
  link: '/Grossjungig'
},
]


  return (
    <div className='card-list'>
        {list.map((card) =>  <Card title={card.title} id={card.id} description={card.description} image={card.img} link={card.link}/>)}
    </div>
  )
}

export default CardList