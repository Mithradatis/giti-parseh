'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { ImagesSlider } from '@/components/ui/images-slider'
import { motion } from 'framer-motion'
import { fetcher } from '@/app/api/fetcher'
import { renderContent } from '@/lib/utils'

const Hero = ({ content, trans }: { content: any; trans: any }) => {
  const [images, setImages] = useState<string[]>([])
  useMemo(() => {
    const getSlides = async () => {
      const slides: string[] = []
      const gallery = await fetcher(`${process.env.API_URL}/api/hero-sliders?populate=Image`)
      await gallery.data.forEach((slide: any) => {
        slides.push(process.env.API_URL + slide.attributes.Image.data.attributes.url)
      })

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
            <motion.p className="font-bold text-xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              {renderContent(content.attributes.content, 'text-center')}
            </motion.p>
            <Link
              href="products"
              className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4"
            >
              <span>{trans.explore_the_collection} →</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </Link>
          </motion.div>
        </ImagesSlider>
        <div
          className={
            'py-4 md:px-8 px-6 relative bg-white border border-gray-200 w-4/5 m-auto rounded-2xl left-0 right-0 shadow-md'
          }
          id="advanced-search"
          style={{ marginTop: '-4rem' }}
        >
          <h3 className={'font-bold text-2xl mb-4 text-center'}>{trans.advanced_product_search}</h3>
          <div
            className={
              'pb-4 flex md:flex-row flex-column flex-wrap items-center justify-center gap-6'
            }
          >
            <div className={'md:flex-1 flex-auto'}>
              <select
                id="countries"
                className="font-bold h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>{trans.choose_type}</option>
                <option value="Tiles">Tiles</option>
                <option value="Mosaic">Mosaic</option>
                <option value="Sink">Sink</option>
                <option value="Slab">Slab</option>
              </select>
            </div>
            <div className={'md:flex-1 flex-auto'}>
              <select
                id="countries"
                className="font-bold h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>{trans.choose_material}</option>
                <option value="Marble">Marble</option>
                <option value="Quartzite">Quartzite</option>
                <option value="Ceramic">Ceramic</option>
                <option value="Limestone">Limestone</option>
              </select>
            </div>
            <div className={'md:flex-1 flex-auto'}>
              <select
                id="countries"
                className="font-bold h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>{trans.choose_color}</option>
                <option value="White">White</option>
                <option value="Green">Green</option>
                <option value="Yellow">Yellow</option>
                <option value="Beige">Beige</option>
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
