import React from 'react'
import Image from 'react-graceful-image'


const ImagePlaceholder = (url, borderRadius, pictureDims) => {
    return (
    <Image
        src={url}
        width={pictureDims}
        height={pictureDims}
        alt={url}
        retry={{ count: 4, delay: 5 }}
        style={{borderRadius: borderRadius, margin: "10px", border: "solid darkgrey 3px"}} // any styling properties need to go here as the other things above are element props, not style props
    />
    )
}

export default ImagePlaceholder