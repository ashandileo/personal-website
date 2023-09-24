import projectsData from '@/data/projectsData'
import { genPageMetadata } from 'app/seo'
import AnimateComponent from '@/components/AnimateComponent'
import Card from '@/components/Card'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <AnimateComponent>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Websites and Apps I've built
          </p>
        </div>
        <div className="container py-12 flex flex-col gap-[48px]">
          {projectsData.map((project, index) => (
            <Card key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </AnimateComponent>
  )
}
