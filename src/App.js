
import React from 'react'
// import PersistentDrawerRight from './Components/Drawer'
import { Route } from "react-router-dom"
import HomePage from './Pages/HomePage'
import UserProfilePage from './Pages/UserProfilePage'
import MyNavbar from './Components/Navbar'



function App() {

  return (
    <div>
      <div>
        <MyNavbar />
      </div>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/users/:userId" component={UserProfilePage} />
      </div>
    </div>
  );
}

export default App;