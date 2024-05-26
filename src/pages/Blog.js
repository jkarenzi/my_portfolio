import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { errorToast } from "../components/Toast";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Blog = () => {
    const {id} = useParams()
    const [blog, setBlog] = useState({})
    const url = process.env.REACT_APP_BACKEND_URL
    const {token, userInfo} = useContext(AuthContext) 
    const [comments, setComments] = useState([])
    const [toggleOptions, setToggleOptions] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [toggleUpdateComment, setToggleUpdateComment] = useState({state:false, id:""})

    useEffect(() => {
        (async() => {
            try{
                const resp = await fetch(`${url}/blogs/get_blog/${id}`,{
                    method: 'GET',
                    headers:{
                        'Content-Type': 'application/json'
                    }
                })
            
                let response = await resp.json()
                console.log(response)
            
                if(resp.ok){
                    setBlog(response.blog)
                }
            }catch(err){
                errorToast(err.message)
            }    
        })()
    },[])

    useEffect(() => {
        (async() => {
            try{
                const resp = await fetch(`${url}/comments/get_comments/${id}`,{
                    method: 'GET',
                    headers:{
                        'Content-Type': 'application/json'
                    }
                })
            
                let response = await resp.json()
                console.log(response)
                
                if(resp.ok){
                    setComments(response.commentList)
                } 
            }catch(err){
                errorToast(err.message)
            }
        })()
    },[])

    // const deleteComment = async (id) => {
    //     try{
    //         const resp = await fetch(`${url}/comments/delete_comment/${id}`,{
    //             method:"DELETE",
    //             headers:{
    //                 'Authorization': `Bearer ${token}`
    //             }
    //         })
    
    //         if(resp.status === 204){
    //             alert("Comment deleted successfully")
    
    //         }else{
    //             let response = await resp.json()
    //             alert(response.msg)
    //         }
    
    //     }catch(err){
    //         alert(err.message)
    //     }
    // }
    
    // const updateComment = async (formData) => {
    //     loader.style.display = "flex"
    //     try{
    //         const resp = await fetch(`${url}/comments/update_comment`,{
    //             method:"POST",
    //             headers:{
    //                 'Authorization': `Bearer ${token}`,
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(formData)
    //         })
    
    //         let response = await resp.json()
    
    //         loader.style.display = "none"
    
    //         alert(response.msg)
    //     }catch(err){
    //         alert(err.message)
    //     }
    // }

    // const createComment = async() => {
    //     const resp = await fetch(`${url}/comments/create_comment`,{
    //         method: "POST",
    //         headers:{
    //             'Authorization': `Bearer ${token}`,
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(formData)
    //     })

    //     let response = await resp.json()
    //     alert(response.msg)
    // }

    // const like = async() => {
    //     const resp = await fetch(`${url}/blogs/like`,{
    //         method:"POST",
    //         headers:{
    //             'Authorization': `Bearer ${token}`,
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(formData)
    //     })

    //     let response = await resp.json()
    // }

    // const dislike = async() => {
    //     const resp = await fetch(`${url}/blogs/dislike`,{
    //         method:"POST",
    //         headers:{
    //             'Authorization': `Bearer ${token}`,
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(formData)
    //     })

    //     let response = await resp.json()
    // }

    return (  
        <body className="m-0 p-0 bg-custom-black min-h-screen flex flex-col items-center justify-between text-white">
            <Header nav={true}/>
            {toggleUpdateComment.state && <div className="fixed w-full h-screen flex items-center justify-center z-10 bg-black bg-opacity-50">
                <div className="w-80 h-80 flex flex-col justify-between items-center bg-custom-lightGrey rounded-[10px]">
                    <div className="flex justify-between items-center w-full p-4">
                        <h3 className="m-0 font-medium text-base">Update Comment</h3>
                        <img src="/images/close.png" class="closeComment" width="15px" height="15px" onClick={() => setToggleUpdateComment({state:false, id:""})}/>
                    </div>
                    <form className="flex flex-col gap-4 w-[90%] items-center mb-6">
                        <textarea className="w-[98%] h-40 resize-none bg-custom-lightGrey border-[1.5px] border-custom-orange text-white rounded-[10px]"></textarea>
                        <button className="flex items-center justify-center bg-custom-orange text-white border-none rounded-[20px] w-28 h-[2.2rem]">Submit</button>
                    </form>
                </div>
            </div>}
            <div className="flex flex-col items-start w-4/5 gap-12 mt-12 mb-12">
                <div className="flex w-full flex-col items-start border-b-2 border-custom-orange pb-4 gap-4">
                    <h1 className="font-semibold text-4xl m-0">{blog?.title}</h1>
                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 flex items-center justify-center overflow-hidden rounded-full">
                                <img className="w-full h-full object-cover"/>
                            </div>
                            <h4 className="m-0 font-bold">Joslyn Manzi Karenzi</h4>
                        </div>
                        <h4 className="m-0 font-light">May 4, 2023</h4>
                    </div>
                </div>
                <div className="w-full">
                    <img src={blog?.imageUrl} className="w-full h-full object-cover"/>
                </div>
                <div className="w-full text-justify font-extralight">
                    {blog?.content}
                </div>
                <div className="flex flex-col items-start w-full gap-8">
                    <div className="flex items-center gap-8 self-start h-8">
                        <div className="flex items-center gap-2">
                            <img src="/images/like.png" width="20px" height="20px"/>
                            <h4>{blog?.likes}</h4>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/images/dislike.png" width="20px" height="20px"/>
                            <h4>{blog?.dislikes}</h4>
                        </div>
                        <div className="flex items-center justify-center rounded-full bg-custom-black w-10 h-10 hover:bg-custom-lightGrey">
                            <img src="/images/share.png" width="20px" height="20px"/>
                        </div>    
                    </div>
                    <h3>Comments</h3>
                    <div className="flex w-3/5 items-end gap-4">
                        <div className="w-12 h-12 flex items-center justify-center overflow-hidden rounded-full">
                            <img src={userInfo?userInfo.imageUrl:'https://res.cloudinary.com/ditrc0kph/image/upload/v1711450197/rgrjpswkhjey1xgunqhr.png'} className="w-full h-full object-cover"/>
                        </div>
                        <input type="text" placeholder="Type your comment here" className="outline-none border-b-[1.5px] border-custom-orange bg-custom-black text-white w-[90%]"/>
                    </div>
                    <div className="flex flex-col gap-4 items-start w-3/5">
                        {comments.map(comment => (
                            <div className="relative flex flex-col items-start gap-8 pb-2 border-b-2 border-custom-lightGrey w-full">
                                <div className="flex justify-between items-center w-full">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 flex items-center justify-center overflow-hidden rounded-full">
                                            <img src={comment.imageUrl} className="w-full h-full object-cover"/>
                                        </div>
                                        <div className="flex flex-col items-start gap-[0.8rem]">
                                            <h3 className="m-0 text-sm font-semibold">{comment.username}</h3>
                                            <h3 className="m-0 text-sm font-normal text-[color:rgb(189,189,189)]">{comment.createdAt}</h3>
                                        </div>
                                    </div>
                                    <img src="/images/dots.png" width="20" height="20" onClick={() => setToggleOptions(true)}/>
                                </div>
                                {toggleOptions && <div className="absolute right-0 top-10 w-40 h-24 bg-custom-lightGrey rounded-lg flex flex-col overflow-hidden">
                                    <div className="flex items-center justify-end w-full pt-2 pb-2 pr-2">
                                        <img src="/images/close.png" width="12" height="12" onClick={() => setToggleOptions(false)}/>
                                    </div>
                                    <button className="flex items-center justify-center w-full h-8 bg-custom-lightGrey text-white border-none border-t-[0.5px] border-t-[#a2a2a2] cursor-pointer hover:bg-[color:#5f5f5f]" onClick={() => setToggleUpdateComment({state:true, id:comment._id})}>Update comment</button>
                                    <button className="flex items-center justify-center w-full h-8 bg-custom-lightGrey text-white border-none border-t-[0.5px] border-t-[#a2a2a2] cursor-pointer hover:bg-[color:#5f5f5f]">Delete comment</button>
                                </div>}
                                <div className="text-justify text-sm self-start">{comment.comment}</div>
                            </div>
                        ))}    
                    </div>
                </div>
            </div>
            <Footer/>
        </body>
    );
}
 
export default Blog;