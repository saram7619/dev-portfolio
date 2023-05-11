"use client"

import { useState, FormEvent, ChangeEvent } from "react"
import { useRouter } from "next/navigation"
import React from "react"
import Link from "next/link"

const initState = {
  name: "",
  email: "",
  message: "",
}

export default function Feedback() {
  const [data, setData] = useState(initState)
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(JSON.stringify(data))
    const { name, email, message } = data

    // Send data to API route
    const res = await fetch("http://localhost:3000/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    })

    const result = await res.json()
    console.log(result)

    // Navigate to thank you
    router.push(`/thank-you/`)
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name = e.target.name

    setData((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }))
  }

  const canSave = [...Object.values(data)].every(Boolean)

  const content = (
    <section
      id='feedback'
      className='bg-gray flex flex-col mx-auto max-w-[1110px] justify-center p-6 items-center gap-8'>
      <div className='lg:flex lg:flex-row lg:justify-between lg:w-full'>
        <div className='lg:w-1/2'>
          <h2 className='text-4xl font-bold mb-5 py-6 md:text-[72px] lg:text-[88px]'>
            Contact Us
          </h2>
          <h3 className='mb-[50px] text-white-2 max-w-[445px]'>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </h3>
        </div>

        <form
          onSubmit={handleSubmit}
          className='relative bg-gray flex flex-col md:items-end md:max-w-[445px] lg:w-1/2 p-6'>
          <div className='flex-col'>
            <label className='text-2xl mb-1 hidden' htmlFor='name'>
              Name
            </label>

            <input
              className='mb-4 block w-full bg-gray border-b border-[#696767] active:border-active active:ring-active
          focus:outline-none focus:border-active focus:ring-0 focus:ring-active
          disabled:bg-gray disabled:text-gray disabled:border-gray disabled:shadow-none
          invalid:error invalid:text-error
          focus:invalid:error focus:invalid:ring-error'
              type='text'
              id='name'
              name='name'
              placeholder='NAME'
              pattern='([A-Z])[\w+.]{1,}'
              value={data.name}
              onChange={handleChange}
              autoComplete='off'
              autoFocus
              required
            />
            <label className='text-2xl mb-1 hidden' htmlFor='email'>
              Email
            </label>
            <input
              className='mt-8 mb-4 block w-full bg-gray border-b border-[#696767] active:border-active active:ring-active
          focus:outline-none focus:border-active focus:ring-0 focus:ring-active
          disabled:bg-gray disabled:text-gray disabled:border-gray disabled:shadow-none
          invalid:error invalid:text-error
          focus:invalid:error focus:invalid:ring-error'
              id='email'
              name='email'
              placeholder='EMAIL'
              pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
              value={data.email}
              onChange={handleChange}
              autoComplete='off'
              required
            />

            <label className='text-2xl mb-8 hidden' htmlFor='message'>
              Message
            </label>
            <textarea
              className='mt-8 mb-4 w-full bg-gray border-b border-[#696767] active:border-active active:ring-active
          focus:outline-none focus:border-active focus:ring-0 focus:ring-active
          disabled:bg-gray disabled:text-gray disabled:border-gray disabled:shadow-none'
              id='message'
              name='message'
              placeholder='MESSAGE'
              rows={5}
              cols={30}
              value={data.message}
              onChange={handleChange}
              autoComplete='off'
              required
            />

            <button
              className='ml-auto inline-block items-end mt-8 text-white underline-offset-8 underline decoration-green decoration-2 hover:cursor-pointer hover:text-green disabled:opacity-25'
              disabled={!canSave}>
              SEND MESSAGE
            </button>
          </div>
          <div>
            <svg
              className='absolute -bottom-8 translate-x-40 lg:translate-x-[60rem] lg:-translate-y-[10rem] z-30'
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
        </form>
      </div>
    </section>
  )

  return content
}
