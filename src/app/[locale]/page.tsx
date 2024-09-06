import { Suspense, lazy } from 'react'
import { fetcher } from '@/app/api/fetcher'
import { fetchTranslations } from '@/app/api/translationsFetcher'

const Hero = lazy(() => import('@/components/sections/Hero'))
const QuickAccess = lazy(() => import('@/components/sections/QuickAccess'))
const ProductsGrid = lazy(() => import('@/components/sections/ProductsGrid'))
const ExploreProduct = lazy(() => import('@/components/sections/ExploreProducts'))
const Branches = lazy(() => import('@/components/sections/Branches'))

export default async function Home({ params }: { params: { locale: string } }) {
  const apiUrl = `${process.env.API_URL}/api`
  const HeroContent: any = await fetcher(`${apiUrl}/hero-content?locale=${params.locale}`)
  const inspiration: any = await fetcher(`${apiUrl}/inspiration?locale=${params.locale}`)
  const quickAccessItems: any = await fetcher(
    `${apiUrl}/quick-accesses?populate=*&sort=order&locale=${params.locale}`
  )
  const productsGrid: any = await fetcher(
    `${apiUrl}/products-grids?populate[products][populate]=image&pagnation[limit]=8&locale=${params.locale}`
  )
  const ExploreProducts: any = await fetcher(`${apiUrl}/explore?locale=${params.locale}`)
  const ExploreProductsItems: any = await fetcher(
    `${apiUrl}/explore-designs?populate[products][populate]=image&locale=${params.locale}`
  )
  const GlobalTrade: any = await fetcher(`${apiUrl}/global-trade?locale=${params.locale}`)
  const translation: any = await fetchTranslations(params.locale)

  return (
    <div className={'container md:px-8 md:pb-8 px-6'}>
      {HeroContent && (
        <Suspense fallback={null}>
          <Hero content={HeroContent.data} locale={params.locale} trans={translation} />
        </Suspense>
      )}
      {inspiration && quickAccessItems && (
        <Suspense fallback={null}>
          <QuickAccess
            inspiration={inspiration.data}
            locale={params.locale}
            items={quickAccessItems.data}
          />
        </Suspense>
      )}
      {productsGrid.data.length > 0 && (
        <Suspense fallback={null}>
          <ProductsGrid
            items={productsGrid.data[0].attributes.products.data}
            locale={params.locale}
            trans={translation}
          />
        </Suspense>
      )}
      {ExploreProducts && ExploreProductsItems && (
        <Suspense fallback={null}>
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
        </Suspense>
      )}
      {GlobalTrade && (
        <Suspense fallback={null}>
          <Branches description={GlobalTrade.data} trans={translation} />
        </Suspense>
      )}
    </div>
  )
}
