import OptimizedImage from '@/components/elements/OptimizedImage'
import Link from 'next/link'

const ExploreProduct = ({
  content,
  items,
  locale,
  trans,
}: {
  content: any
  items: any
  locale: string
  trans: any
}) => {
  return (
    <div className={'py-6 flex md:flex-nowrap flex-wrap items-end gap-12'}>
      <div className={'flex-grow-0 md:w-1/3 md:pb-12'}>
        <h3 className={'font-bold text-3xl mb-4'}>{content.attributes.title}</h3>
        <p className={'text-justify text-sm'}>{content.attributes.description}</p>
      </div>
      <div className={'flex md:flex-nowrap flex-wrap items-center justify-center flex-1 gap-6'}>
        {
          items.map((item: any, index: number) => (
            <Link
              key={item.id}
              href={`#`}
              className={'group w-full'}
              aria-label={item.attributes.title}
            >
              <div key={index} className="relative w-full overflow-hidden">
                <OptimizedImage
                  className={'rounded-2xl w-full aspect-square'}
                  quality={100}
                  width={250}
                  height={250}
                  src={item.attributes?.image?.data?.attributes?.formats?.small?.url || ''}
                  alt={item.attributes.alt ? item.attributes.alt : item.attributes.title}
                />
                <h4 className={'text-xl pt-2'}>{item.attributes.title}</h4>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default ExploreProduct
