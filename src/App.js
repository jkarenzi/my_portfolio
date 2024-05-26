import logo from './logo.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import UserMgt from './pages/UserMgt';
import BlogMgt from './pages/BlogMgt';
import Queries from './pages/Queries';
import Query from './pages/Query';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';


function App() {
  const {token} = useContext(AuthContext) 

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route index element={<Landing/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='portfolio' element={<Portfolio/>}/>
        <Route path='blogs' element={<Blogs/>}/>
        <Route path='blogs/:id' element={<Blog/>}/>
        <Route path='profile' element={token?<Profile/>:<Navigate to='/'/>}/>
        <Route path='dashboard' element={token?<Dashboard/>:<Navigate to='/'/>}/>
        <Route path='usermgt' element={token?<UserMgt/>:<Navigate to='/'/>}/>
        <Route path='blogmgt' element={token?<BlogMgt/>:<Navigate to='/'/>}/>
        <Route path='queries' element={token?<Queries/>:<Navigate to='/'/>}/>
        <Route path='query/:id' element={token?<Query/>:<Navigate to='/'/>}/>
      </Route>
    )
  )

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
