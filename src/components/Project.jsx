import React from 'react'
import ProjectCard from './ProjectCard';

function Project() {
    const works = [
  {
    imgSrc: '/images/project-1.jpg',
    title: 'Roomora - Hotel management app',
    tags: ['Full-Stack', 'Management', 'Booking'],
    projectLink: 'https://roomora-nine.vercel.app/'
  },
  {
    imgSrc: '/images/project-2.jpg',
    title: 'Employee Management System',
    tags: ['Frontend', 'SPA','Context API', 'Auth'],
    projectLink: 'https://employee-management-system-six-chi.vercel.app/'
  },
  {
    imgSrc: '/images/project-3.jpg',
    title: 'A premium e-commerce website for perfumes and essentials',
    tags: ['Full Stack','Freelancing', 'Production','Payment Gateway'],
    projectLink: 'https://www.mzaromas.com/'
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
