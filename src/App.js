import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Navigate
} from "react-router-dom";
import Login from './components/account/Login';
import Navbar from './components/Navbar/Navbar'
import AddNote from './components/AddNote'
import DataProvider from './components/context/DataProvider';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import Post from './components/Post';
import Sidebar from './components/Sidebar';
import Detailview from './components/Detailview';
import Update from './components/Update';
import Contact from './components/Contact';


const Privateroute = ({ auth, ...props }) => {
  return auth ?
    <>
      <Navbar />
      <Outlet />
    </> :
    <Navigate replace to='/login' />
}



function App() {

  const [auth, setauth] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const savedAuth = sessionStorage.getItem('accesstoken');
    if (savedAuth) {
      setauth(true);
    }
  }, []);



  return (
    <>
      <DataProvider>
      
        <Router>
          <div>

            <Routes>
              <Route exact path='/login' element={<Login setauth={setauth} />} />
              <Route exact path='/' element={<Home />} />
              <Route exact path='/create' element={<AddNote />} />
              <Route exact path='/post' element={<Post />} />
              <Route exact path='/bar' element={<Sidebar />} />
              <Route exact path='/bar/details/:id' element={<Detailview />} />
              <Route exact path='/bar/update/:id' element={<Update />} />
              <Route exact path='/contact' element={<Contact />} />
            </Routes>
          </div>
        </Router>
      </DataProvider>
    </>

  );
}

export default App;
