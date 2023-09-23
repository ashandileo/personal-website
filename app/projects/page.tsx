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
        <div className="container py-12">
          <div
            className="rounded-[12px] flex overflow-hidden"
            style={{
              boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.06), 0px 4px 3px 0px rgba(0, 0, 0, 0.07)',
            }}
          >
            <div className="w-[50%] p-[48px] bg-[#F9FAFB] dark:bg-[#374151] flex items-center justify-center">
              <img
                src="/static/images/projects/happy5.svg"
                className="w-full h-full"
                alt="Happy5"
              />
            </div>
            <div className="w-[50%] p-[48px] bg-white dark:bg-[#1F2937]">
              <h2 className="font-bold text-xl mb-[24px]">Happy5</h2>
              <p className="mb-[4px]">
                Happy5 is mobile-first, continuous performance management platform with real-time
                people data
              </p>

              <div className="flex items-center flex-wrap gap-[8px] mt-[24px]">
                <Badge>React</Badge>
                <Badge>React Context</Badge>
                <Badge>React Query</Badge>
                <Badge>Zustand</Badge>
                <Badge>Cypress</Badge>
                <Badge>Storybook</Badge>
                <Badge>Typescript</Badge>
                <Badge>Tailwindcss</Badge>
              </div>

              <div className="text-base font-medium leading-6 mt-[24px]">
                <Link
                  href="https://happy5.co/"
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  target="_blank"
                >
                  Visit website &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimateComponent>
  )
}
