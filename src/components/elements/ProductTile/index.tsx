'use client'

import Link from 'next/link'
import OptimizedImage from '@/components/elements/OptimizedImage'
import { GlareCard } from '@/components/ui/glare-card'

const ProductTile = (props: any) => {
    return (
        <Link
            href={`/${props.locale }/products/${props.item.attributes.slug}`}
            className={'sm:w-1/4 w-full basis-1 aspect-square rounded-2xl'}
            aria-label={props.item.attributes.title}
        >
            <GlareCard className="flex flex-col items-center justify-center rounded-2xl">
                <OptimizedImage
                    quality={100}
                    width={400}
                    height={400}
                    src={props.item.attributes.image.data?.attributes?.formats?.medium?.url || props.item.attributes.image.data?.attributes?.url}
                    alt={props.item.attributes.title}
                    className={'md:rounded-2xl rounded-t-2xl w-full'}
                />
                {
                    props.hasTitle &&
                    <p
                        className={
                            'md:hidden md:absolute md:z-10 md:top-0 md:h-full w-full md:p-0 md:text-left text-center p-4 text-white font-bold text-2xl items-center justify-center group-hover:flex transition-all duration-300'
                        }
                    >
                        {
                            props.item.attributes.title
                        }
                    </p>
                }
            </GlareCard>
        </Link>
    )
}

export default ProductTile
