import { genPageMetadata } from 'app/seo'
import ProjectsContent from '@/components/projects/ProjectsContent'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return <ProjectsContent />
}
