import { fetcher } from '@/app/api/fetcher'
import { fetchTranslations } from '@/app/api/translationsFetcher'
import Breadcrumb from '@/components/elements/Breadcrumb'
import ProductTile from '@/components/elements/ProductTile'

const Products = async ({ params }: { params: any }) => {
  const translation = await fetchTranslations(params.locale)
  const productsGrid: any = await fetcher(
    `${process.env.API_URL}/api/products?filters[type][$eq]=tile&populate=image&locale=${params.locale}`
  )

  return (
    <>
      <div className={'w-full bg-slate-100 border-t border-b border-slate-300'}>
        <div className={'container'}>
          <div className={'py-6 flex flex-wrap items-center md:justify-between justify-center'}>
            <h1 className={'font-bold text-4xl'}>
              {
                translation.products
              }
            </h1>
            <Breadcrumb
              locale={params.locale}
              trans={translation}
            />
          </div>
        </div>
      </div>
      <div className={'container md:pt-16 px-8 pt-8 pb-8 mx-auto text-lg'}>
        <div className={'grid grid-cols-1 md:grid-cols-4 gap-4'}>
          {
            productsGrid.data.length > 0 &&
            productsGrid.data.map((item: any, index: number) => (
              <ProductTile
                key={index}
                locale={params.locale}
                item={item}
                hasTitle={true}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Products
