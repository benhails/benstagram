import React from 'react'
import { ImagePreviewerDiv, ImagePreviewerText } from './Styled'


const ImagePreviewer = ({previewImage, message}) => {

    return (

        <ImagePreviewerDiv>
            {previewImage ? (
                <img
                    src={previewImage}
                    alt={previewImage}
                    width="80%"
                    height="80%"
                    padding="20px"
                    style={{ margin: "auto", borderRadius: "5%"}}
                />
            ) : (
                    <ImagePreviewerText message={message !== '' ? true : false}>
                        {message ? message : "Image Preview"}
                    </ImagePreviewerText>
                )}
        </ImagePreviewerDiv>
    )
}

export default ImagePreviewer