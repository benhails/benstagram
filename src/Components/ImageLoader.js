import React from 'react'


const ImageLoadingIndicator = ({isLoading, width, height}) => isLoading ? <img src="https://wordtohtml.net/images/ajax-loader.gif" alt="Loading..." width={width} height={height}></img> : null


export default ImageLoadingIndicator