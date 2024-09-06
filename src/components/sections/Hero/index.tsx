'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ImagesSlider } from '@/components/ui/images-slider'
import { motion } from 'framer-motion'
import { fetcher } from '@/app/api/fetcher'
import { renderContent } from '@/lib/utils'

const Hero = ({ content, locale, trans }: { content: any; locale: string; trans: any }) => {
  const [images, setImages] = useState<HeroSliderImage[]>([])
  useEffect(() => {
    const getSlides = async () => {
      const slides: HeroSliderImage[] = []
      const gallery: any = await fetcher(`${process.env.API_URL}/api/hero-sliders?populate=image`)
      if (gallery?.data?.length > 0) {
        await gallery.data.forEach((slide: any) => {
          slides.push({
            src: slide.attributes.image?.data?.attributes?.url || '',
            alt: slide.attributes.title || '',
          })
        })
      }

      images.length === 0 && setImages(slides)
    }
    getSlides()
  }, [])

  return (
    images.length > 0 && (
      <>
        <ImagesSlider className="h-[450px] rounded-3xl" images={images} overlay={true}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          >
            <motion.div className="font-bold text-xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              {renderContent(content.attributes.content, 'text-center')}
            </motion.div>
            <Link
              href={`${locale}`}
              aria-label="products"
              className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4"
            >
              <span>{trans.explore_the_collection} →</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </Link>
          </motion.div>
        </ImagesSlider>
        <div
          className={
            'py-4 md:px-8 px-6 relative bg-white border border-gray-200 w-4/5 m-auto rounded-2xl left-0 right-0 shadow-md -mt-16'
          }
          id="advanced-search"
        >
          <h3 className={'font-bold text-2xl mb-4 text-center'}>{trans.advanced_product_search}</h3>
          <div
            className={
              'pb-4 flex md:flex-row flex-column flex-wrap items-center justify-center gap-6'
            }
          >
            <div className={'md:flex-1 flex-auto'}>
              <label htmlFor="product-type" className={'sr-only'}>
                Select Product Type
              </label>
              <select
                defaultValue={'default'}
                id="product-type"
                aria-labelledby="product-type"
                className="font-bold h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="default">{trans.choose_type}</option>
                <option value="tiles">Tiles</option>
                <option value="mosaic">Mosaic</option>
                <option value="sink">Sink</option>
                <option value="slab">Slab</option>
              </select>
            </div>
            <div className={'md:flex-1 flex-auto'}>
              <label htmlFor="product-material" className={'sr-only'}>
                Select Product Material
              </label>
              <select
                defaultValue={'default'}
                id="product-material"
                aria-labelledby="product-material"
                className="font-bold h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="default">{trans.choose_material}</option>
                <option value="marble">Marble</option>
                <option value="quartzite">Quartzite</option>
                <option value="ceramic">Ceramic</option>
                <option value="limestone">Limestone</option>
              </select>
            </div>
            <div className={'md:flex-1 flex-auto'}>
              <label htmlFor="product-color" className={'sr-only'}>
                Select Product Color
              </label>
              <select
                defaultValue={'default'}
                id="product-color"
                aria-labelledby="product-color"
                className="font-bold h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="default">{trans.choose_color}</option>
                <option value="white">White</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="beige">Beige</option>
              </select>
            </div>
            <button className="text-lg md:flex-1 flex-auto h-12 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              {trans.search}
            </button>
          </div>
        </div>
      </>
    )
  )
}

export default Hero
