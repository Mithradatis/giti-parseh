import { fetcher } from '@/app/api/fetcher'
import { fetchTranslations } from '@/app/api/translationsFetcher'
import { renderContent } from '@/lib/utils'
import Breadcrumb from '@/components/elements/breadcrumb'

const Page = async ({ params }: { params: any }) => {
  const { data } = await fetcher(`${process.env.API_URL}/api/slugify/slugs/page/${params.slug}?locale=${params.locale}`)
  const translation = await fetchTranslations(params.locale);

  return (
    <>
      <div className={"w-full bg-slate-100 border-t border-b border-slate-300"}>
        <div className={"container"}>
          <div className={"py-6 flex flex-wrap items-center md:justify-between justify-center"}>
            <h1 className={"font-bold text-4xl"}>
              {data.attributes.title}
            </h1>
            <Breadcrumb trans={translation}/>
          </div>
        </div>
      </div>
      <div className={"container p-8 mx-auto text-lg"}>
        {
          ( data.attributes.content && Object.keys(data.attributes.content).length > 0 ) &&
          renderContent(data.attributes.content, 'text-justify')
        }
      </div>
    </>

  )
}

export default Page
