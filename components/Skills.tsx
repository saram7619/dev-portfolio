const skills = [
  {
    name: "HTML",
    years: "4 years experience",
  },
  {
    name: "CSS",
    years: "4 years experience",
  },
  {
    name: "JavaScript",
    years: "4 years experience",
  },
  {
    name: "Accessibility",
    years: "4 years experience",
  },
  {
    name: "React",
    years: "3 years experience",
  },
  {
    name: "Sass",
    years: "3 years experience",
  },
]

const Skills = () => {
  return (
    <section className='relative mx-auto p-6 overflow-x-hidden'>
      <hr className='mx-auto max-w-[1110px] border-slate-200 dark:border-slate-800 mb-[72px]' />
      <div className='container mx-auto max-w-[1110px] p-4 md:p-[30px] mb-15 grid justify-center md:grid-cols-2 grid-rows-3 gap-6 lg:grid-cols-3'>
        <h2 className='hidden'>Skills</h2>
        {skills.map((skill, index) => (
          <div className='grid' key={index}>
            <h3 className='text-center text-[2rem] md:text-left md:text-5xl leading-10 font-bold'>
              {skill.name}
            </h3>
            <h4 className='text-base text-center font-normal text-white-2 md:text-left capitalize'>
              {skill.years}
            </h4>
          </div>
        ))}

        <svg
          className='absolute -bottom-8 translate-x-40 md:translate-x-[20rem] lg:translate-x-[60rem] lg:-translate-y-[10rem] z-30'
          xmlns='http://www.w3.org/2000/svg'
          width='530'
          height='129'>
          <g fill='none' fillRule='evenodd' stroke='#FFF' opacity='.25'>
            <ellipse cx='265' cy='40' rx='264.5' ry='39.5' />
            <ellipse cx='265' cy='52' rx='264.5' ry='39.5' />
            <ellipse cx='265' cy='65' rx='264.5' ry='39.5' />
            <ellipse cx='265' cy='77' rx='264.5' ry='39.5' />
            <ellipse cx='265' cy='89' rx='264.5' ry='39.5' />
          </g>
        </svg>
      </div>
      <hr className='mx-auto max-w-[1110px] border-slate-200 dark:border-slate-800 my-[2.5rem] md:hidden' />
    </section>
  )
}

export default Skills
