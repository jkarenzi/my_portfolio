import Header from "../components/Header";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { successToast, errorToast } from "../components/Toast";
import { BigLoader } from "../components/Loader";


const BlogMgt = () => {
    const url = process.env.REACT_APP_BACKEND_URL
    const [blogList, setBlogList] = useState([])
    const [toggleBlogOverlay, setToggleBlogOverlay] = useState(false)
    const [toggleDets, setToggleDets] = useState({state:false, id:""})
    const [toggleLoader, setToggleLoader] = useState(false)
    const location = useLocation()

    useEffect(() => {
        (async() => {
            try{
                setToggleLoader(true)
                const resp = await fetch(`${url}/blogs/get_blogs`,{
                    method: 'GET',
                    headers:{
                        'Content-Type': 'application/json'
                    }
                })
            
                let response = await resp.json()
                setToggleLoader(false)
                if(resp.ok){
                    const newBlogList = response.blogList.map(blog => {
                        const dateObject = new Date(blog.createdAt)
                        const formattedDate = dateObject.toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        });
                        return {
                            ...blog,
                            createdAt: formattedDate
                        }
                    })
                    setBlogList(newBlogList)
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
            { toggleBlogOverlay && <div className="fixed w-full h-screen flex items-center justify-center z-10 bg-black bg-opacity-50">
                <div className="flex flex-col items-center justify-start w-blogOverlayWidth h-blogOverlayHeight bg-custom-lightGrey p-4 pt-0 pb-8 rounded-lg">
                    <div className="flex items-center justify-between w-full mt-2 mb-4">
                        <h3 className="font-bold text-xl">New Blog</h3>
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-custom-lightGrey hover:bg-custom-headerBlack">
                            <img src="/images/close.png" width="15px" height="15px" onClick={() => setToggleBlogOverlay(false)}/>
                        </div>
                    </div>
                    <form className="flex flex-col items-center w-full gap-8" enctype="multipart/form-data">
                        <div className="flex flex-col items-start gap-2 w-full">
                            <label>Title</label>
                            <input className="outline-none w-full bg-custom-lightGrey text-white border-b border-custom-orange" type="text" id="blog-title"/>
                            <div className="bg-red-600 text-sm"></div>
                        </div>
                        <div className="flex flex-col items-start gap-2 w-full">
                            <label>Body</label>
                            <textarea className="resize-none outline-none w-full h-32 rounded-lg bg-custom-lightGrey text-white border border-custom-orange"></textarea>
                            <div className="bg-red-600 text-sm"></div>
                        </div>
                        <div className="flex flex-col items-start gap-2 w-full">
                            <label>Cover Image</label>
                            <input type="file" accept="image/png" className="flex flex-col items-start gap-2 w-full"/>
                            <div className="bg-red-600 text-sm"></div>
                        </div>
                        <button className="flex items-center justify-center bg-custom-orange text-white border-none rounded-3xl w-32 h-10">Submit</button>
                        <div class="loader">
                            <div class="dot dot1"></div>
                            <div class="dot dot2"></div>
                            <div class="dot dot3"></div>
                        </div>   
                    </form>
                </div>
            </div>}
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
                        <div className="flex items-center justify-between w-full">
                            <button className="flex items-center justify-center bg-custom-orange text-white border-none rounded-3xl w-32 h-10" onClick={() => setToggleBlogOverlay(true)}>
                                New Blog
                            </button>
                            <form className="flex items-center gap-2 rounded-2xl bg-custom-lightGrey w-72 h-10 pl-3">
                                <img src="/images/search.png" width="15px" height="15px"/>
                                <input type="text" className="border-none outline-none bg-custom-lightGrey w-blogmgtWidth text-white" placeholder="Search Blogs" required/>
                            </form>
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            {blogList.map(blog => (
                                <div className="flex flex-col items-start justify-center w-full min-h-16 gap-4 bg-custom-lightGrey rounded-md pt-2 pb-2">
                                    <div className="flex items-center justify-between w-full">
                                        <div className="flex flex-col items-start gap-4 ml-4 text-sm font-bold text-left cursor-pointer w-blogTitleWidth">{blog.title}</div>
                                        <div className="flex items-center gap-6 mr-4">
                                            <img src="/images/down.png" width="15" height="15" onClick={() => setToggleDets({state:!toggleDets.state, id:blog._id})}/>
                                            <img src="/images/edit.png" width="15" height="15"/>
                                            <img src="/images/delete.png" width="15" height="15"/>
                                        </div>
                                    </div>
                                    { (toggleDets.state && toggleDets.id === blog._id) && <div className="flex flex-col items-start italic text-sm font-light pl-4">
                                        <li>Published: {blog.createdAt}</li>
                                        <li>{blog.likes} Likes</li>
                                        <li>{blog.dislikes} Dislikes</li>
                                        <li>{blog.comments} Comments</li>
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
 
export default BlogMgt;