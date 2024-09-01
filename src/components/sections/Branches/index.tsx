import Globe from '@/components/elements/Globe'
import { renderContent } from '@/lib/utils'

const Branches = ({ description, trans }: { description: any; trans: any }) => {
  return (
    <div className={'md:py-20 py-8'}>
      <h3 className={'relative z-10 font-bold text-4xl text-center md:-mb-20'}>
        {description.attributes.title}
      </h3>
      <div className={'flex flex-wrap items-center justify-center gap-10'}>
        <Globe />
        <div>
          <div className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
            {renderContent(description.attributes.description, 'text-justify')}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Branches
