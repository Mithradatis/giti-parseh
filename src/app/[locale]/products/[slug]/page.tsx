import { fetcher } from '@/app/api/fetcher'
import { fetchTranslations } from '@/app/api/translationsFetcher'
import { renderContent } from '@/lib/utils'
import Breadcrumb from '@/components/elements/Breadcrumb'
import ProductTile from '@/components/elements/ProductTile'
import ProductSlider from '@/components/elements/ProductSlider'

const Product = async ({ params }: { params: any }) => {
  const { data } = await fetcher(
    `${process.env.API_URL}/api/slugify/slugs/product/${params.slug}?populate=image,gallery&locale=${params.locale}`
  )
  const translation = await fetchTranslations(params.locale)

  return (
    <>
      <div className={'w-full bg-slate-100 border-t border-b border-slate-300'}>
        <div className={'container'}>
          <div className={'py-6 flex flex-wrap items-center md:justify-between justify-center'}>
            <h1 className={'font-bold text-4xl'}>{data.attributes.title}</h1>
            <Breadcrumb
              locale={params.locale}
              trans={translation}
            />
          </div>
        </div>
      </div>
      <div className={'container p-8 mx-auto text-lg'}>
        <ProductTile
          locale={params.locale}
          item={data}
        />
        <div className={'py-12 flex flex-row flex-wrap items-start md:gap-8 gap-4'}>
          <article className={"flex-1"}>
            {
              data.attributes.description &&
              Object.keys(data.attributes.description).length > 0 &&
              renderContent(data.attributes.description, 'text-justify')
            }
          </article>
          <aside className={"md:px-8 md:border-l border-1 border-slate-300 md:w-1/4 w-full"}>
            <p>
              <span className={"pr-2 text-slate-500 font-bold"}>
                {
                  translation.product_type
                }:
              </span>
              <span>
                {
                  data.attributes.type
                }
              </span>
            </p>
            <p>
              <span className={"pr-2 text-slate-500 font-bold"}>
                {
                  translation.product_material
                }:
              </span>
              <span>
                {
                  data.attributes.material
                }
              </span>
            </p>
            <p>
              <span className={"pr-2 text-slate-500 font-bold"}>
                {
                  translation.color
                }:
              </span>
              <span>
                {
                  data.attributes.color
                }
              </span>
            </p>
          </aside>
        </div>
        {
          data.attributes.gallery.data &&
          <div className={'flex items-center justify-center'}>
            <ProductSlider
              items={data.attributes.gallery.data || []}
            />
          </div>
        }
      </div>
    </>
  )
}

export default Product
