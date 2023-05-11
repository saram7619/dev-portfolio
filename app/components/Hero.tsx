/* eslint-disable react/no-unescaped-entities */
//import Link from "next/link"
import ProfilePic from "./ProfilePic"

const Hero = () => {
  return (
    <section className='mx-auto max-w-[1110px] flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height'>
      <article className='sm:w-1/2'>
        <h2 className='text-[2.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-bold text-center -translate-y-6 sm:text-left z-50 max-w-md text-slate-900 dark:text-white'>
          Nice to <br className='hidden lg:hidden' />
          meet you! I'm{" "}
          <span className='underline-offset-[10px] underline decoration-4 decoration-green'>
            Adam Keyes.
          </span>
        </h2>
        <h3 className='max-w-md text-base my-5 text-center sm:text-left text-slate-700 dark:text-slate-400'>
          Based in the UK, I'm a front-end developer passionate about building
          accessible web apps that users love.
        </h3>
        <a
          href='#feedback'
          className='flex flex-col text-white text-center underline-offset-8 underline decoration-green decoration-2 md:text-left hover:text-green'>
          CONTACT ME
        </a>
      </article>
      <ProfilePic />
      <div className='absolute top-[11.25rem] -translate-x-[17rem] md:top-[3.75rem] md:-translate-x-[25rem] lg:top-[2.5rem] lg:-translate-x-[30rem] z-30'>
        <svg xmlns='http://www.w3.org/2000/svg' width='530' height='129'>
          <g fill='none' fillRule='evenodd' stroke='#FFF' opacity='.25'>
            <ellipse cx='265' cy='40' rx='264.5' ry='39.5' />
            <ellipse cx='265' cy='52' rx='264.5' ry='39.5' />
            <ellipse cx='265' cy='65' rx='264.5' ry='39.5' />
            <ellipse cx='265' cy='77' rx='264.5' ry='39.5' />
            <ellipse cx='265' cy='89' rx='264.5' ry='39.5' />
          </g>
        </svg>
      </div>
      <div className='absolute -translate-y-[6.125rem] translate-x-[12rem] md:translate-y-[7.5rem] md:translate-x-[20rem] lg:translate-y-[90px] lg:-translate-x-[2rem] z-30'>
        <svg xmlns='http://www.w3.org/2000/svg' width='129' height='129'>
          <circle
            cx='830.5'
            cy='585.5'
            r='64'
            fill='none'
            stroke='#FFF'
            transform='translate(-766 -521)'
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero
