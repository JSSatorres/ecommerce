import React from 'react';
import { Routes,  Route} from "react-router-dom";
import Home from './pages/home';
/* import Nav from './components/nav'; */
import Profile from './pages/profile';
import './styles/index.scss';
import Wheather from './pages/wheather';
import Login from './pages/login';
import Register from './pages/register';



function App() {
  return (
      <Routes>
        {/* <Route path="/" element={<App />}> */}
          <Route  path="/" element={<Home />} />
          <Route path="wheather" element={<Wheather/>} /> 
          <Route path="login" element={<Login/>} /> 
          <Route path="register" element={<Register/>} /> 
{/*           <Route path="wheather" element={<Wheather/>} />  */}
         {/*  <Route index element={<Nav />} />   */}
          <Route path="profile" element={<Profile />}>
            <Route path=":profileId" element={<Profile />} />         
          </Route>
         {/* a */}
      </Routes>  
  );
}

export default App;
