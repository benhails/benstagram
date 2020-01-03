import styled from 'styled-components';
import { NavbarText } from 'reactstrap';
// import { ToastContainer } from 'react-toastify';

const UserBlock = styled.div `
    display: flex;
    flex-direction: row;
    background-color: lightgrey;
    margin: 10px;
`

const UserProfile = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`

const UsersPhotos = styled.div `
    display: flex;
    align-items: space-between;
    flex-wrap: wrap;
`

const ImagePreviewerDiv = styled.div `
    background-color: none;
    min-height: 150px;
    min-width: 150px;
    max-height: 300px;
    margin: 10px;
`

const LoggedInUser = styled(NavbarText) `
    padding-right: 10px;
`

const AddPhotoButton = styled.button `
    height: 20%;
    margin-top: 10px;
    margin-bottom: 10px;
`

const FileButton = styled.input `
    width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
    /* :focus + label {
        outline: 1px dotted #000;
	    outline: -webkit-focus-ring-color auto 5px;
    } */
    + label {
        cursor: pointer;
        font-size: 1.25em;
        font-weight: 400;
        color: black;
        background-color: lightgrey;
        display: inline-block;
        margin-right: 10px;
        padding: 5px;
        border-radius: 10%;
    }
`

const ImagePreviewerText = styled.h3 `
    color: ${({message}) => (message === true ? "green" : "black")};
    opacity: ${({message}) => (message === true ? "100%" : "15%")};
    text-align: center;
`



// The below didn't work because the properties werent's recognised but I don't think that's a major issue because they are defined on the toast items anyway

// const ToastContainerCenter = styled(ToastContainer) `
//     position: "top-center";
//     autoClose: 5000;
//     hideProgressBar: false;
//     newestOnTop
//     closeOnClick
//     rtl={false}
//     pauseOnVisibilityChange
//     draggable={false}
//     pauseOnHover
// `

// NB. Styled components already allow SASS - cool :)


// To style a bootstrap component you can use syntax as follows:

// const StyledModal = styled(Modal)`
// `


// export { UserBlock, 
//          ToastContainerCenter 
//         }

export { UserBlock, LoggedInUser, FileButton, ImagePreviewerDiv, ImagePreviewerText, UsersPhotos, UserProfile, AddPhotoButton }