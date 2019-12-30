import React from 'react'
import { Route } from "react-router-dom"
import HomePage from './Pages/HomePage'
import UserProfilePage from './Pages/UserProfilePage'
import MyNavbar from './Components/Navbar'
import { ToastContainer } from 'react-toastify'
// import { ToastContainerCenter } from './Components/Styled'


function App() {

  return (
    <div>
      <div>
        <MyNavbar />
        <ToastContainer />
        {/* <ToastContainerCenter /> */}
      </div>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/users/:userId" component={UserProfilePage} />
      </div>
    </div>
  );
}

export default App;