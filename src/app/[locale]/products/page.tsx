import { fetcher } from '@/app/api/fetcher'
import { fetchTranslations } from '@/app/api/translationsFetcher'
import Breadcrumb from '@/components/elements/breadcrumb'

const Products = async ({ params }: { params: any }) => {
  const translation = await fetchTranslations(params.locale)

  return (
    <>
      <div className={'w-full bg-slate-100 border-t border-b border-slate-300'}>
        <div className={'container'}>
          <div className={'py-6 flex flex-wrap items-center md:justify-between justify-center'}>
            <h1 className={'font-bold text-4xl'}>{translation.products}</h1>
            <Breadcrumb trans={translation} />
          </div>
        </div>
      </div>
      <div className={'container p-8 mx-auto text-lg'}></div>
    </>
  )
}

export default Products
