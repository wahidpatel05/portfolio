import React from 'react'
import Skillcard from './Skillcard';

function Skill() {
    const skillItem = [
  {
    imgSrc: '/images/figma.svg',
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/nodejs.svg',
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: '/images/expressjs.svg',
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: '/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
];
  return (
    <section className='section'>
        <div className="container">
            <h2 className="headline-2 reveal-up">
                Essential Tools I use
            </h2>
            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                Discover the powerful tools and technologies I utilize to craft exceptional web experiences. From design to deployment, these are the essentials that drive my development process.
            </p>
            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,1fr))]">
                {
                    skillItem.map(({ imgSrc, label, desc }, key) => (
                        <Skillcard 
                        imgSrc={imgSrc}
                        label={label}
                        desc={desc}
                        key={key}
                        classes="reveal-up"
                        />
                    ))
                }
            </div>

        </div>
    </section>
  )
}

export default Skill