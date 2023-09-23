/* eslint-disable @next/next/no-img-element */
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'
import AnimateComponent from '@/components/AnimateComponent'
import Link from 'next/link'
import Badge from '@/components/Badge'

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
          {projectsData.map((project, index) => {
            const isEven = index % 2 === 0

            return (
              <div
                className="rounded-[12px] overflow-hidden grid grid-cols-2"
                style={{
                  boxShadow:
                    '0px 2px 2px 0px rgba(0, 0, 0, 0.06), 0px 4px 3px 0px rgba(0, 0, 0, 0.07)',
                }}
                key={index}
              >
                <div
                  className={`col-span-2 lg:col-span-1 p-[48px] bg-[#F9FAFB] dark:bg-[#374151] flex items-center justify-center ${
                    isEven ? '' : 'order-0 lg:order-1'
                  }`}
                >
                  <img src={project.imgSrc} className="w-full h-full" alt="Happy5" />
                </div>
                <div className="col-span-2 lg:col-span-1 p-[48px] bg-white dark:bg-[#1F2937]">
                  <h2 className="font-bold text-xl mb-[24px]">{project.title}</h2>
                  <p className="mb-[4px]">{project.description}</p>

                  <div className="flex items-center flex-wrap gap-[8px] mt-[24px]">
                    {project.stacks.map((stack, index) => (
                      <Badge key={index}>{stack}</Badge>
                    ))}
                  </div>

                  <div className="text-base font-medium leading-6 mt-[24px]">
                    <Link
                      href={project.href}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      target="_blank"
                    >
                      Visit website &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </AnimateComponent>
  )
}
