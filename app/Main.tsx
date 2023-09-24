import 'css/prism.css'

import AnimateComponent from '@/components/AnimateComponent'
import Link from 'next/link'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import siteMetadata from '@/data/siteMetadata'

export default function Home({ posts }) {
  return (
    <AnimateComponent>
      <div className="mt-[40px]">
        <div className="text-center">
          <div className="flex items-center justify-center">
            <h1 className="linear-wipe text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold">
              Hi there! I'm Ashandi
            </h1>
            <span className="text-5xl ml-[8px] wave">👋</span>
          </div>

          <p className="mt-[12px]">
            I'm a software frontend engineer. Welcome to my corner of the internet. I'm glad you're
            here!{' '}
            <Link
              href={`mailto:${siteMetadata.email}`}
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              Get in touch &rarr;
            </Link>
          </p>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5 text-center">
            <h1 className="mt-10 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
              Projects
            </h1>
          </div>

          <div className="container py-12 flex flex-col gap-[48px]">
            {projectsData.slice(0, 2).map((project, index) => (
              <Card key={index} project={project} index={index} />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div />
          <Link
            href="/projects"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            View all projects &rarr;
          </Link>
        </div>
      </div>
    </AnimateComponent>
  )
}
