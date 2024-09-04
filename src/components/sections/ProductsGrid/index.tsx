'use client'

import Link from 'next/link'
import OptimizedImage from '@/components/elements/OptimizedImage'
import { GlareCard } from '@/components/ui/glare-card'

const ProductsGrid = ({ items, locale, trans }: { items: any; locale: string; trans: any }) => {
  return (
    <>
      <h3 className={'font-bold text-3xl text-center mb-2'}>{trans.products}</h3>
      <div
        className={'py-6 flex md:flex-nowrap flex-wrap items-center justify-center md:gap-8 gap-4'}
      >
        {items.map((item: any, index: number) => (
          <Link
            key={index}
            href={`${locale}/products/${item.attributes.slug}`}
            className={'w-full'}
            aria-label={item.attributes.title}
          >
            <GlareCard className="flex flex-col items-center justify-center w-full">
              <OptimizedImage
                quality={100}
                width={400}
                height={400}
                src={`${process.env.API_URL}${item.attributes.image.data.attributes.url}`}
                alt={item.attributes.title}
              />
              <p
                className={
                  'absolute z-10 top-0 w-full h-full text-white font-bold text-2xl items-center justify-center hidden group-hover:flex transition-all duration-300'
                }
              >
                {trans.discover}
              </p>
            </GlareCard>
          </Link>
        ))}
      </div>
    </>
  )
}

export default ProductsGrid
