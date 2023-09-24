import Badge from './Badge'
import LazyImage from './LazyImage'
import Link from './Link'

const Card = ({ project, index }) => {
  const isEven = index % 2 === 0

  return (
    <div
      className="rounded-[12px] overflow-hidden grid grid-cols-2"
      style={{
        boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.06), 0px 4px 3px 0px rgba(0, 0, 0, 0.07)',
      }}
      key={index}
    >
      <div
        className={`col-span-2 lg:col-span-1 p-[48px] bg-[#F9FAFB] dark:bg-[#374151] flex items-center justify-center ${
          isEven ? '' : 'order-0 lg:order-1'
        }`}
      >
        <LazyImage alt={project.title} src={project.imgSrc} className="w-full h-full" />
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
}

export default Card
