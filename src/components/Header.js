import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Header = (props) => {
    const location = useLocation()
    const {userInfo} = useContext(AuthContext)
    return (
        <header className="flex items-center justify-between w-full bg-custom-headerBlack h-16">
            <img className="m-12" src="/images/MJ.png" width="40px" height="20px"/>
            {props.nav && <nav className="flex items-center h-full">
                <Link className={`flex items-center justify-center hover:text-custom-orange no-underline h-full pl-4 pr-4 ${(location.pathname === '/')?'text-custom-orange':'text-white'}`} to="/">About</Link>
                <Link className={`flex items-center justify-center hover:text-custom-orange no-underline h-full pl-4 pr-4 ${(location.pathname === '/contact')?'text-custom-orange':'text-white'}`} to="/contact">Contact me</Link>
                <Link className={`flex items-center justify-center hover:text-custom-orange no-underline h-full pl-4 pr-4 ${(location.pathname === '/portfolio')?'text-custom-orange':'text-white'}`} to="/portfolio">Portfolio</Link>
                <Link className={`flex items-center justify-center hover:text-custom-orange no-underline h-full pl-4 pr-4 ${(location.pathname === '/blogs')?'text-custom-orange':'text-white'}`} to="/blogs">Blogs</Link>
            </nav>}
            <div className="flex items-center justify-center rounded-full w-10 h-10 border-boxBig border-custom-orange mr-8">
                <div className="flex items-center justify-center rounded-full w-boxSmall h-boxSmall overflow-hidden">
                    <img className="w-full h-full object-cover" src={userInfo.imageUrl}/>
                </div>
            </div>
            <img className="hidden mr-4" src="/images/hamburger.png" width="20px" height="15px"/>
            <div className="hidden flex-col items-center bg-custom-headerBlack text-white h-48 w-28 absolute top-16 right-0">
                <a className="flex items-center justify-start h-1/4 w-5/6 pl-4 no-underline text-white text-sm font-normal hover:bg-custom-lightGrey" href="./index.html">About</a>
                <a className="flex items-center justify-start h-1/4 w-5/6 pl-4 no-underline text-white text-sm font-normal hover:bg-custom-lightGrey" href="./contact.html">Contact me</a>
                <a className="flex items-center justify-start h-1/4 w-5/6 pl-4 no-underline text-white text-sm font-normal hover:bg-custom-lightGrey" href="./portfolio.html">Portfolio</a>
                <a className="flex items-center justify-start h-1/4 w-5/6 pl-4 no-underline text-white text-sm font-normal hover:bg-custom-lightGrey" href="./blogs.html">Blogs</a>
                <a className="flex items-center justify-start h-1/4 w-5/6 pl-4 no-underline text-white text-sm font-normal hover:bg-custom-lightGrey" href="./profile.html">Profile</a>
                <button className="flex items-center justify-start bg-custom-headerBlack text-white border-none w-full h-12 pl-3 hover:bg-custom-lightGrey">Logout</button>
            </div>
            <div className="hidden flex-col items-center justify-center gap-2 bg-custom-headerBlack text-white h-16 w-24 absolute top-16 right-0">
                <a className="flex items-center justify-center w-full no-underline text-white text-sm font-normal h-2/4 hover:bg-custom-lightGrey" href="./profile.html">Profile</a>
                <button className="flex items-center justify-center bg-custom-headerBlack text-white border-none w-full h-2/4">Logout</button>
            </div>
        </header>
    );
}
 
export default Header;