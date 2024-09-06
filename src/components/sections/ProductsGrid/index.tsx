import ProductTile from '@/components/elements/ProductTile'

const ProductsGrid = ({ items, locale, trans }: { items: any; locale: string; trans: any }) => {
  return (
    <>
      <h3 className={'font-bold text-3xl text-center mb-2'}>{trans.products}</h3>
      <div
        className={'py-6 flex md:flex-row flex-col flex-wrap items-center justify-center gap-4'}
      >
        {
          items.map((item: any, index: number) => (
            <ProductTile
              key={index}
              locale={locale}
              item={item}
              hasTitle={true}
            />
          ))
        }
      </div>
    </>
  )
}

export default ProductsGrid
