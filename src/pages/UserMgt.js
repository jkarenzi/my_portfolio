import Header from "../components/Header";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { successToast, errorToast } from "../components/Toast";
import {BigLoader} from '../components/Loader'


const UserMgt = () => {
    const {token} = useContext(AuthContext)
    const url = process.env.REACT_APP_BACKEND_URL
    const [userList, setUserList] = useState([])
    const [toggleDets, setToggleDets] = useState({state:false,id:""})
    const [toggleLoader, setToggleLoader] = useState(false)
    const location = useLocation()

    useEffect(() => {
        (async() => {
            try{
                setToggleLoader(true)
                const resp = await fetch(`${url}/blogs/get_users`,{
                    method: 'GET',
                    headers:{
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })
            
                let response = await resp.json()
                setToggleLoader(false)
                if(resp.ok){
                    const newUserList = response.userList.map(user => {
                        const dateObject = new Date(user.createdAt)
                        const formattedDate = dateObject.toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        });
                        return {
                            ...user,
                            createdAt: formattedDate
                        }
                    })
                    setUserList(newUserList)
                }else{
                    errorToast(response.msg)
                }
            }catch(err){
                errorToast(err.message)
            }
        })()     
    },[])

    return (  
        <body className="m-0 p-0 flex flex-col bg-custom-black text-white min-h-screen">
            <Header nav={false}/>
            {toggleLoader && <BigLoader/>}
            <div className="flex justify-between w-full min-h-dashboardHeight">
                <div className="flex flex-col flex-1 bg-custom-headerBlack w-1/5">
                    <div className="flex items-center justify-start pl-8 w-full h-12 hover:bg-custom-lightGrey">
                        <Link className={`no-underline ${(location.pathname === '/dashboard')? 'text-custom-orange':'text-white'} `} to="/dashboard">Dashboard</Link>
                    </div>
                    <div className="flex items-center justify-start pl-8 w-full h-12  hover:bg-custom-lightGrey">
                        <Link className={`no-underline ${(location.pathname === '/queries')? 'text-custom-orange':'text-white'} `} to="/queries">Queries</Link>
                    </div>
                    <div className="flex items-center justify-start pl-8 w-full h-12  hover:bg-custom-lightGrey">
                        <Link className={`no-underline ${(location.pathname === '/usermgt')? 'text-custom-orange':'text-white'} `} to="/usermgt">User Management</Link>
                    </div>
                    <div className="flex items-center justify-start pl-8 w-full h-12  hover:bg-custom-lightGrey">
                        <Link className={`no-underline ${(location.pathname === '/blogmgt')? 'text-custom-orange':'text-white'} `} to="/blogmgt">Blog Management</Link>
                    </div>
                </div>
                <div className="flex flex-col items-center w-4/5">
                    <div className="flex flex-col items-center gap-4 bg-black rounded-lg p-4 pt-8 pb-4 mt-8 mb-8 w-blogmgtWidth">
                        <div className="flex items-center justify-start w-full">
                            <form className="flex items-center gap-2 rounded-2xl bg-custom-lightGrey w-72 h-10 pl-3">
                                <img src="/images/search.png" width="15px" height="15px"/>
                                <input type="text" className="border-none outline-none bg-custom-lightGrey w-blogmgtWidth text-white" placeholder="Search Users"/>
                            </form>
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            {userList.map(user => (
                                <div className="flex flex-col items-start justify-center w-full min-h-16 gap-4 bg-custom-lightGrey rounded-md pt-2 pb-2">
                                    <div className="flex items-center justify-between w-full">
                                        <div className="flex flex-col items-start gap-4 ml-4 text-sm font-bold text-left cursor-pointer w-blogTitleWidth">{user.username}</div>
                                        <div className="flex items-center gap-6 mr-4">
                                            <img src="/images/down.png" width="15px" height="15px" onClick={() => setToggleDets({state:!toggleDets.state, id:user._id})}/>
                                            <img src="/images/delete.png" width="15px" height="15px"/>
                                        </div>
                                    </div>
                                    { (toggleDets.state && toggleDets.id === user._id) && <div className="flex flex-col items-start italic text-sm font-light pl-4">
                                        <li>Created at: {user.createdAt}</li>
                                        <li>Email: {user.email}</li>
                                        <li>Profile image: {user.imageUrl}</li>
                                    </div>}
                                </div>       
                            ))}   
                        </div>
                    </div>
                </div>
            </div>    
        </body>
    );
}
 
export default UserMgt;