import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState,useEffect } from "react";
import { successToast,errorToast } from "../components/Toast"
import { BigLoader } from "../components/Loader";
import { useNavigate } from "react-router-dom";


const Blogs = () => {
    const [blogList, setBlogList] = useState([])
    const [toggleLoader, setToggleLoader] = useState(false)
    const url = process.env.REACT_APP_BACKEND_URL
    const navigate = useNavigate()


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

    function scrollLeft() {
        let rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        let container = document.getElementsByClassName('blog-inner-container')[0]
        let blog = document.getElementsByClassName('blog')[0]
        let containerDimensions = blog.getBoundingClientRect();
        let containerWidth = containerDimensions.width + rootFontSize;
        container.scrollLeft -= containerWidth;
    }
    
    function scrollRight() {
        let rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        let container = document.getElementsByClassName('blog-inner-container')[0]
        let blog = document.getElementsByClassName('blog')[0]
        let containerDimensions = blog.getBoundingClientRect();
        let containerWidth = containerDimensions.width + rootFontSize;
        container.scrollLeft += containerWidth;
    }

    return (  
        <body className="m-0 p-0 flex items-center flex-col justify-between bg-custom-black text-white min-h-screen">
            <Header nav={true}/>
            {toggleLoader && <BigLoader/>}
            <div className="flex items-center justify-center gap-8 w-4/5 h-blogContHeight">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-custom-lightGrey mr-1 hover:bg-custom-arrowBlack" onClick={scrollLeft}>
                    <img src='/images/left-arrow.png' width="15px" height="15px"/>
                </div>
                <div className="flex items-center gap-4 w-innerCont overflow-x-auto scroll-smooth blog-inner-container">
                    {blogList.map((blog) => (
                        <div className="w-60 h-80 rounded-md flex flex-col overflow-hidden shrink-0 blog">
                            <div className="w-full h-projectImgHeight">
                                <img className="w-full h-full object-cover" src={blog.imageUrl}/>
                            </div>
                            <div className="flex flex-col items-start justify-between bg-custom-lightGrey p-2 h-projectDescHeight">
                                <h3 className="text-left cursor-pointer font-bold m-0 text-base" onClick={() => navigate(`/blogs/${blog._id}`)}>{blog.title}</h3>
                                <h3 className="text-left cursor-pointer font-normal m-0 text-sm">
                                    {blog.createdAt}
                                </h3>
                            </div>
                        </div>
                    ))}  
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-custom-lightGrey ml-1 hover:bg-custom-arrowBlack" onClick={scrollRight}>
                    <img src='/images/right-arrow.png' width="15px" height="15px"/>
                </div>
            </div>
            <Footer/>
        </body>
    );
}
 
export default Blogs;