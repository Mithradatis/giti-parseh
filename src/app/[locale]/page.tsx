import { Suspense, lazy } from 'react'
import { fetcher } from '@/app/api/fetcher'
import { fetchTranslations } from '@/app/api/translationsFetcher'
import QuickAccess from '@/components/sections/QuickAccess'
import ProductsGrid from '@/components/sections/ProductsGrid'
import ExploreProduct from '@/components/sections/ExploreProducts'

const Hero = lazy(() => import('@/components/sections/Hero'))
const Branches = lazy(() => import('@/components/sections/Branches'))

export default async function Home({ params }: { params: { locale: string } }) {
  const apiUrl = `${process.env.API_URL}/api`
  const HeroContent = await fetcher(`${apiUrl}/hero-content?locale=${params.locale}`)
  const inspiration = await fetcher(`${apiUrl}/inspiration?locale=${params.locale}`)
  const quickAccessItems = await fetcher(
    `${apiUrl}/quick-accesses?populate=*&sort=order&locale=${params.locale}`
  )
  const productsGrid = await fetcher(
    `${apiUrl}/products-grids?populate[products][populate]=image&locale=${params.locale}`
  )
  const ExploreProducts = await fetcher(`${apiUrl}/explore?locale=${params.locale}`)
  const ExploreProductsItems = await fetcher(
    `${apiUrl}/explore-designs?populate[products][populate]=image&pagnation[limit]=8&locale=${params.locale}`
  )
  const GlobalTrade = await fetcher(`${apiUrl}/global-trade?locale=${params.locale}`)
  const translation = await fetchTranslations(params.locale)

  return (
    <div className={'container md:px-8 md:pb-8 px-6'}>
      {HeroContent && (
        <Suspense fallback={null}>
          <Hero content={HeroContent.data} trans={translation} />
        </Suspense>
      )}
      {inspiration && quickAccessItems && (
        <QuickAccess inspiration={inspiration.data} items={quickAccessItems.data} />
      )}
      {productsGrid.data.length > 0 && (
        <ProductsGrid
          items={productsGrid.data[0].attributes.products.data}
          locale={params.locale}
          trans={translation}
        />
      )}
      {ExploreProducts && ExploreProductsItems && (
        <ExploreProduct
          content={ExploreProducts.data}
          items={
            ExploreProductsItems.data.length > 0
              ? ExploreProductsItems.data[0].attributes.products.data
              : []
          }
          locale={params.locale}
          trans={translation}
        />
      )}
      {GlobalTrade && (
        <Suspense fallback={null}>
          <Branches 
            description={GlobalTrade.data} 
            trans={translation} 
          />
        </Suspense>
      )}
    </div>
  )
}
