import React from 'react'
import Image from 'react-graceful-image'


const ImagePlaceholder = (url) => {
    return (
    <Image
        src={url}
        width="200"
        height="200"
        alt={url}
        retry={{ count: 2, delay: 5 }}
    />
    )
}

export default ImagePlaceholder