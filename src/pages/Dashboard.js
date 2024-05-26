import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { successToast,errorToast } from "../components/Toast"
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { BigLoader } from "../components/Loader";

const Dashboard = () => {
    const location = useLocation()
    const url = process.env.REACT_APP_BACKEND_URL
    const [data, setData] = useState({blogCount:"",userCount:"",queryCount:"", notificationList:[]})
    const {token} = useContext(AuthContext) 
    const [toggleLoader, setToggleLoader] = useState(false)

    useEffect(() => {
        (async() => {
            try{
                setToggleLoader(true)
                const resp = await fetch(`${url}/dashboard/get_counts`,{
                    method: "GET",
                    headers:{
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                })
        
                let response = await resp.json()
                console.log(response)
                setToggleLoader(false)
                if(resp.ok){
                    const newList = response.notificationList.map(notification => {
                        const dateObject = new Date(notification.createdAt)
                        const formattedDate = dateObject.toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        });

                        let notText;
                        if(notification.notificationType === "like"){
                            notText = `${notification.username} liked your blog: blogId-${notification.featureId}`
                        }else if(notification.notificationType === "dislike"){
                            notText = `${notification.username} disliked your blog: blogId-${notification.featureId}`
                        }else if(notification.notificationType === "comment"){
                            notText = `${notification.username} commented on your blog: blogId-${notification.featureId}`;
                        }else if(notification.notificationType === "query"){
                            notText = `New message from ${notification.username}`
                        }

                        return {
                            ...notification,
                            notificationText: notText,
                            createdAt: formattedDate
                        }
                    })

                    console.log(newList)

                    setData({...response, notificationList:newList})
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
                <div className="flex items-center flex-col w-4/5">
                    <div className="flex justify-center w-4/5 gap-8 mt-8">
                        <div className="flex items-center flex-col w-60 h-40 bg-custom-lightGrey rounded-lg">
                            <div className="flex items-center justify-center self-end mr-2 mt-2 bg-custom-black rounded-full w-8 h-8 text-custom-orange">
                                {data.userCount}
                            </div>
                            <img src="/images/user.png" width="70px" height="70px"/>
                            <h3 className="m-0 font-medium">Users</h3>
                        </div>
                        <div className="flex items-center flex-col w-60 h-40 bg-custom-lightGrey rounded-lg">
                            <div className="flex items-center justify-center self-end mr-2 mt-2 bg-custom-black rounded-full w-8 h-8 text-custom-orange">
                                {data.blogCount}
                            </div>
                            <img src="/images/blog.png" width="70px" height="70px"/>
                            <h3 className="m-0 font-medium">Blogs</h3>
                        </div>
                        <div className="flex items-center flex-col w-60 h-40 bg-custom-lightGrey rounded-lg">
                            <div className="flex items-center justify-center self-end mr-2 mt-2 bg-custom-black rounded-full w-8 h-8 text-custom-orange">
                                {data.queryCount}
                            </div>
                            <img src="/images/message.png" width="70px" height="70px"/>
                            <h3 className="m-0 font-medium">Messages</h3>
                        </div>
                    </div>
                    <div className="flex flex-col items-center min-h-notContHeight w-notContWidth bg-custom-headerBlack rounded-t-lg mt-16 gap-4 pb-4">
                        <div className="flex items-center self-start gap-4 ml-8 mt-4">
                            <h3 className="m-0 font-medium text-xl">Notifications</h3>
                            <img src="/images/notify.png"  width="20px" height="20px"/>
                        </div>
                        {data.notificationList.map(notification => (
                            <div className="flex items-center justify-between w-notContWidth h-16 rounded-lg bg-custom-lightGrey">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center justify-center overflow-hidden rounded-full w-8 h-8 ml-4">
                                        <img src={notification.imageUrl} className="w-full h-full object-cover"/>
                                    </div>
                                    <div className="text-left max-w-notificationWidth text-sm">
                                        {notification.notificationText}
                                    </div>
                                </div>
                                <h3 className="m-0 mr-4 font-normal text-sm text-custom-timeColor">{notification.createdAt}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </body>
    );
}
 
export default Dashboard;