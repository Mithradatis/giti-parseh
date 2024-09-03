'use client'

import Image from 'next/image'

const OptimizedImage = (props: any) => {
    return (
        <Image
            src={props.src}
            alt={props.alt}
            width={props.width}
            height={props.height}
            blurDataURL={props.blurDataURL}
            className={props.className}
            style={{ color: undefined }}
        />
    )
}

export default OptimizedImage
