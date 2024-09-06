'use client'

import Image from 'next/image'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

const ProductSlider = (
    {
        items
    }: {
        items: any
    }
) => {
    return (
        <Splide 
            aria-label="Product Slider"
            options={{
                type: 'loop',
                autoWidth: true,
                gap: '1rem',
                arrows: true
              }}
        >
            {
                items.length > 0 &&
                items.map((item: any) => (
                    <SplideSlide key={item.id}>
                        <Image
                            className={"h-[350px] object-contain"}
                            width={500}
                            height={500}
                            src={item.attributes?.formats?.medium?.url || ''}
                            alt={
                                item.attributes.name
                                    .replace(/[-_]/g, ' ')
                                    .replace(/\.[^/.]+$/, '')
                            }
                        />
                    </SplideSlide>
                ))
            }
        </Splide>
    )
}

export default ProductSlider
