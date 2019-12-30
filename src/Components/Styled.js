import styled from 'styled-components';
// import { ToastContainer } from 'react-toastify';

const UserBlock = styled.div `
    background-color: lightgrey;
    margin: 10px;
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

export { UserBlock }