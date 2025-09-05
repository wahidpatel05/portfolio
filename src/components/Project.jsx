import React from 'react'
import ProjectCard from './ProjectCard';

function Project() {
    const works = [
  {
    imgSrc: '/images/roomora.png',
    title: 'Roomora - Hotel management app',
    tags: ['Full-Stack', 'Management', 'Booking'],
    projectLink: 'https://github.com/kshxaib/Roomora-hotel-management-app.git'
  },
  {
    imgSrc: '/images/strong-password-generator.png',
    title: 'Password Generator',
    tags: ['API', 'SPA'],
    projectLink: 'https://github.com/wahidpatel05/learning-react/tree/main/05passgeneratore'
  },
  {
    imgSrc: '/images/stock-tracker.jpg',
    title: 'Real Time Stock Price Checker',
    tags: ['Python','Development', 'API'],
    projectLink: 'https://github.com/wahidpatel05/real-time-stock-tracker.git'
  }
];
  return (
    <section 
    className=""
    id='projects'>
        <div className="container">
            <h2 className="headline-2 mt-8 reveal-up">
                My Projects
            </h2>
            <div className='grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,1fr))] mt-8'>
                {works.map(({imgSrc, title, tags, projectLink}, key) => (
                    <ProjectCard 
                    key={key}
                    imgSrc={imgSrc}
                    title={title}
                    tags={tags}
                    projectLink={projectLink}
                    classes="reveal-up"
                    />
                ))}
            </div>
        </div>

    </section>
  )
}

export default Project