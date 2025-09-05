import React from 'react'

function About() {
    const aboutItems = [
  {
    label: 'Project done',
    number: 10
  },
  {
    label: 'Technologies familiar with',
    number: 10
  },
  {
    label: 'Certifications',
    number: 4
  }
];
  return (
    <section
    id='about'
    className='section'
    >
        <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12 max-w-6xl mx-auto reveal-up'>
            <p className='text-zinc-300 mb-4 md:8 md:text-xl md:max-w-[90ch]'>
                Hi, I’m Wahid Patel — an aspiring Software Engineer and Frontend Developer.
                I’m currently pursuing a B.E. in Information Technology at M.H. Saboo Siddik College of Engineering (Batch 2027). With hands-on experience in React.js, JavaScript, Python, C++, and SQL, I enjoy building scalable web applications and solving real-world problems through technology.
                <br /> <br />
                Beyond academics, I serve as the Vice Chairperson of the ACM Student Chapter, where I lead and collaborate on technical events, hackathons, and student initiatives.
            </p>
            <div className='flex flex-wrap items-center gap-4 md:gap-7'>
                {
                    aboutItems.map(({ label, number },key) => (
                        <div key={key} >
                            <div className='flex items-center md:mb-2'>
                                <span className='text-2xl font-bold md:text-4xl'>{number}</span>
                                <span className='text-indigo-400 front-semibold md:text-3xl'>+</span>
                            </div>
                            <p className="text-sm text-zinc-400">{label}</p>
                        </div>
                    ))
                }
                <img 
                src="/images/logo.svg" 
                alt="Logo"
                width={30}
                height={30}
                className="ml-auto md:w-[40px] md:h-[40px]"
                 />
            </div>

        </div>
    </section>
    
  )
}

export default About