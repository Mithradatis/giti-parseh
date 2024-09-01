import Image from 'next/image'
import Link from 'next/link'
import { HoverEffect } from '@/components/ui/card-hover-effect'

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
      <div className={'flex md:flex-nowrap flex-wrap items-center justify-center gap-6'}>
        {items.map((item: any, index: number) => (
          <Link
            key={item.id}
            href={`${locale}/products/${item.attributes.slug}`}
            className={'group w-full'}
          >
            <div key={index} className="relative w-full overflow-hidden">
              <Image
                className={'rounded-2xl w-full'}
                quality={100}
                width={250}
                height={250}
                src={`${process.env.API_URL}${item.attributes.image.data.attributes.url}`}
                alt={item.attributes.title}
              />
              <h4 className={'text-xl pt-2'}>{item.attributes.title}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ExploreProduct
