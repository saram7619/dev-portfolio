import Link from "next/link"
import Image from "next/image"

const PROJECT_DATA = [
  {
    name: "Design Portfolio",
    tags: ["HTML", "CSS"],
    image: "/images/thumbnail-project-1-small.webp",
  },
  {
    name: "E-Learning Landing Page",
    tags: ["HTML", "CSS"],
    image: "/images/thumbnail-project-2-small.webp",
  },
  {
    name: "Todo Web App",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/thumbnail-project-3-small.webp",
  },
  {
    name: "Entertainment Web App",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/thumbnail-project-4-small.webp",
  },
  {
    name: "Memory Game",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/thumbnail-project-5-small.webp",
  },
  {
    name: "Art Gallery Showcase",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/thumbnail-project-6-small.webp",
  },
]

const Projects = () => {
  return (
    <section className='grid place-items-center mt-0 mb-20 mx-auto max-w-[1110px] p-6'>
      <div className='container mx-auto max-w-[1110px] grid'>
        <div className='flex flex-row justify-between py-8'>
          <h2 className='text-white text-left text-4xl font-bold'>Projects</h2>
          <Link
            href='/feedback'
            className='text-white text-right underline-offset-[10px] underline decoration-green decoration-2 hover:text-green'>
            CONTACT ME
          </Link>
        </div>
        <div className='grid md:grid-cols-2 gap-4'>
          {PROJECT_DATA.map((project) => (
            <div key={project.name} className='md:cols-2 relative'>
              <div className='group'>
                <Image
                  src={project.image}
                  alt={project.name}
                  width={540}
                  height={360}
                  className='transition-opacity duration-300 ease-in-out'
                />
                <div className='hidden lg:block absolute top-0 right-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 ease-in-out'>
                  <div className='mt-32 flex flex-col justify-center items-center space-y-12'>
                    <Link
                      className='text-white text-base underline-offset-8 underline decoration-green hover:text-green'
                      href={`/projects/${project.name}`}>
                      VIEW PROJECT
                    </Link>
                    <Link
                      className='text-white text-base underline-offset-8 underline decoration-green hover:text-green'
                      href={`/projects/${project.name}`}>
                      VIEW CODE
                    </Link>
                  </div>
                </div>
              </div>
              <h3 className='flex flex-row font-bold text-2xl py-[20px]'>
                {project.name}
              </h3>
              <p>
                {project.tags.map((tag, index) => (
                  <span key={index} className='text-lg pe-8 mb-8 font-medium'>
                    {tag}
                  </span>
                ))}
              </p>
              {/* mobile show page and code */}
              <div className='flex items-center space-x-6 my-6 lg:hidden'>
                <Link
                  className='text-white text-base underline-offset-8 underline decoration-green hover:text-green'
                  href={`/projects/${project.name}`}>
                  VIEW PROJECT
                </Link>
                <Link
                  className='text-white text-base underline-offset-8 underline decoration-green hover:text-green'
                  href={`/projects/${project.name}`}>
                  VIEW CODE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
