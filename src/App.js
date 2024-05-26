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
import { AuthProvider } from './contexts/AuthContext';

function App() {
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
        <Route path='profile' element={<Profile/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='usermgt' element={<UserMgt/>}/>
        <Route path='blogmgt' element={<BlogMgt/>}/>
        <Route path='queries' element={<Queries/>}/>
        <Route path='query/:id' element={<Query/>}/>
      </Route>
    )
  )

  return (
    <AuthProvider>
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
    </AuthProvider>
  );
}

export default App;
