/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
'use client'

import React, { useState } from 'react'
import projectsData from '@/data/projectsData'
import AnimateComponent from '@/components/AnimateComponent'
import Card from '@/components/Card'

const ProjectsContent = () => {
  const [activeTab, setActiveTab] = useState('all')

  const listTabs = [
    {
      id: 'all',
      text: 'All',
    },
    {
      id: 'professional',
      text: 'Professional',
    },
    {
      id: 'personal',
      text: 'Personal',
    },
  ]

  const filteredProjects = projectsData.filter((project) => {
    if (activeTab === 'all') {
      return true
    }

    return project.type === activeTab
  })

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
          <div className="mb-[36px] flex items-center justify-center gap-[12px]">
            {listTabs.map((tab, index) => {
              const isActive = tab.id === activeTab

              return (
                <div
                  className={`${
                    isActive ? 'bg-primary-500' : 'bg-transparent'
                  } hover:bg-primary-500 w-min px-3 py-2 rounded-lg transition-all duration-250 cursor-pointer`}
                  key={index}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.text}
                </div>
              )
            })}
          </div>

          <div className="flex flex-col gap-[48px]">
            {filteredProjects.map((project, index) => (
              <Card key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </AnimateComponent>
  )
}

export default ProjectsContent
