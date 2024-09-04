import OptimizedImage from '@/components/elements/OptimizedImage'
import Link from 'next/link'

const QuickAccess = ({
  inspiration,
  locale,
  items,
}: {
  inspiration: any
  locale: string
  items: any
}) => {
  return (
    <div className={'flex md:flex-nowrap flex-wrap items-end py-12 gap-12'}>
      <div className={'py-8'}>
        <h3 className={'font-bold text-3xl mb-4'}>{inspiration.attributes.title}</h3>
        <p>{inspiration.attributes.description}</p>
      </div>
      <div className={'flex md:flex-nowrap flex-wrap items-center justify-center gap-8'}>
        {items.map((item: any) => (
          <Link key={item.id} href="#" className={'group'} aria-label={item.attributes.title}>
            <div className={'relative w-full overflow-hidden'}>
              <OptimizedImage
                className={'rounded-2xl'}
                quality={100}
                width={450}
                height={450}
                alt={item.attributes.alt ? item.attributes.alt : item.attributes.title}
                src={`${process.env.API_URL}${item.attributes.thumbnail.data.attributes.url}`}
              />
              <div className={'absolute w-full h-full top-0 z-10 flex items-center justify-center'}>
                <h3
                  className={
                    'font-bold text-white text-xl group-hover:text-2xl transition-all duration-100'
                  }
                >
                  {item.attributes.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default QuickAccess
