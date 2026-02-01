import React from 'react'
import ExperienceCard from './ExperienceCard'

function Experience() {
  const experiences = [
    {
      company: 'KromaApps',
      roles: [
        {
          role: 'Frontend Developer',
          duration: 'Aug 2025 – Present',
          desc: 'Currently working as a Frontend Developer building and maintaining production-ready React applications with Tailwind and modern UI practices.',
          tags: ['React', 'Tailwind', 'JavaScript'],
        },
        {
          role: 'Frontend Developer (Support)',
          duration: 'Jun 2025 – Aug 2025',
          desc: 'Started as frontend support, fixing bugs and enhancing UI/UX before being promoted to Frontend Developer.',
          tags: ['Bug Fixing', 'UI/UX', 'Team Support'],
        },
      ],
    },
    {
  company: 'Smart India Hackathon 2025',
  roles: [
    {
      role: 'Finalist · Frontend & AI Integration',
      duration: 'December 2025',
      desc: [
        'Scraped and structured learning content from the NSQF portal using Python for downstream processing.',
        ' Developed key frontend interfaces including learning flow and profile display pages.',
        ' Integrated multilingual support by consuming and hosting a language model via Hugging Face.',
        ' Deployed and managed a Hugging Face model to enable scalable multilingual content delivery.',
        ' Collaborated in a fast-paced hackathon environment to deliver an end-to-end functional prototype.',
      ],
      tags: [
        'AI Integration',
        'React',
        'Python',
        'Web Scraping',
        'Multilingual NLP',
        'Hugging Face',
      ],
    },
  ],
},
    {
      company: 'ACM Student Chapter',
      roles: [
        {
          role: 'Vice Chairperson',
          duration: 'Jul 2025 – Present',
          desc: 'Promoted to Vice Chairperson after successfully leading PR initiatives. Responsible for managing a 20+ member core team, organizing hackathons, and student engagement.',
          tags: ['Leadership', 'Event Management', 'Public Speaking'],
        },
        {
          role: 'Joint Head - PR Team',
          duration: 'Feb 2025 – Jul 2025',
          desc: 'Led PR team operations, coordinated sponsorships, handled communications, and boosted ACM’s campus presence.',
          tags: ['Public Relations', 'Team Management'],
        },
      ],
    },
    {
      company: 'Sarvpriye Foundation',
      roles: [
        {
          role: 'Web Developer Intern',
          duration: 'May 2025 – Present',
          desc: 'Interning as a Web Developer, contributing to website development and maintenance using HTML, CSS, and JavaScript.',
          tags: ['Web Development', 'HTML', 'CSS', 'JavaScript'],
        },
      ],
    },
  ]

  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 className="headline-2 reveal-up">Experience</h2>

        <div className="grid gap-y-8 mt-8">
          {experiences.map(({ company, roles }, key) => (
            <ExperienceCard key={key} company={company} roles={roles} classes="reveal-up" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
