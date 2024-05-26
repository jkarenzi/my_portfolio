import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { BigLoader } from "../components/Loader";
import { useState, useEffect } from "react";
import { errorToast } from "../components/Toast";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

const Queries = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [toggleLoader, setToggleLoader] = useState(false)
    const [queryList, setQueryList] = useState([])
    const {token} = useContext(AuthContext)
    const url = process.env.REACT_APP_BACKEND_URL

    useEffect(() => {
        (async () => {
            try{
                setToggleLoader(true)
                const resp = await fetch(`${url}/queries/get_queries`,{
                    method:"GET",
                    headers:{
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                })
            
                let response = await resp.json()
                setToggleLoader(false)
                if(resp.ok){
                    setQueryList(response.queryList)
                    const newQueryList = response.queryList.map(query => {
                        const dateObject = new Date(query.createdAt)
                        const formattedDate = dateObject.toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit'
                        });
                        return {
                            ...query,
                            createdAt: formattedDate
                        }
                    })
                    setQueryList(newQueryList)
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
                    <div className="border-b-boxBig border-custom-orange p-4 mt-4 w-11/12 text-left">
                        Queries
                    </div>
                    <div className="flex flex-col w-11/12 rounded-lg bg-custom-lightGrey mt-12 mb-12 overflow-hidden">
                        <div className="flex items-center justify-end p-4 pr-8 w-full font-normal">
                            {`${queryList.length} Results`}
                        </div>
                        {queryList.map(query => (
                            <div className="flex items-center justify-between border-t-boxBig border-custom-queryBorderColor pl-8 pr-4 w-full h-16 hover:bg-custom-queryHoverColor">
                                <div className="flex justify-start w-24 font-semibold">{query.username}</div>
                                <div className="flex justify-start w-40 font-semibold">{query.email}</div>
                                <div className="flex justify-start font-extralight w-64 text-left">{query.query.slice(0,32)+'...'}</div>
                                <div className="flex justify-start w-20">
                                    <h4 className="m-0 text-sm">{query.createdAt}</h4>
                                </div>
                            </div>
                        ))}
                        {/* <div className="flex items-center justify-between border-t-boxBig border-custom-queryBorderColor pl-8 pr-4 w-full h-16 hover:bg-custom-queryHoverColor">
                            <div className="flex justify-start w-24 font-semibold">jkarenzi</div>
                            <div className="flex justify-start w-40 font-semibold">j.karenzi@alustudent.com</div>
                            <div className="flex justify-start font-extralight w-64 text-left">How is life?...</div>
                            <div className="flex justify-start w-20">
                                <h4 className="m-0 text-sm">Apr 15, 2024</h4>
                            </div>
                        </div>
                        <div className="flex items-center justify-between border-t-boxBig border-custom-queryBorderColor pl-8 pr-4 w-full h-16 hover:bg-custom-queryHoverColor">
                            <div className="flex justify-start w-24 font-semibold">jkarenzi</div>
                            <div className="flex justify-start w-40 font-semibold">j.karenzi@alustudent.com</div>
                            <div className="flex justify-start font-extralight w-64 text-left">How is life?...</div>
                            <div className="flex justify-start w-20">
                                <h4 className="m-0 text-sm">Apr 15, 2024</h4>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>    
        </body>
    );
}
 
export default Queries;