import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { BigLoader } from "../components/Loader";

const Query = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [toggleLoader, setToggleLoader] = useState(false)
    
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
                    <div className="flex flex-col w-11/12 min-h-60 rounded-lg bg-custom-lightGrey mt-12 mb-12 overflow-hidden">    
                        <div className="flex items-center justify-start p-4 pt-3 pb-3 w-full font-normal">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-custom-lightGrey hover:bg-custom-headerBlack" onClick={() => navigate('/queries')}>
                                <img src="/images/back.png" width="15px" height="15px"/>
                            </div>
                        </div>
                        <div className="flex flex-col items-start border-t border-custom-queryBorderColor pl-8 pr-8 pt-4 pb-4 gap-8 w-full">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full overflow-hidden">
                                    <img src="https://res.cloudinary.com/ditrc0kph/image/upload/v1711450197/rgrjpswkhjey1xgunqhr.png" className="w-full h-full object-cover"/>
                                </div>
                                <div className="flex flex-col items-start gap-3">
                                    <h3 className="m-0 font-normal text-base">jkarenzi</h3>
                                    <h3 className="m-0 font-normal text-sm text-custom-queryTimeColor">Apr 15, 2024</h3>
                                </div>
                            </div>
                            <div className="font-light w-full text-justify text-sm">How is life?</div>
                        </div>   
                    </div>
                </div>
            </div>    
        </body>
    );
}
 
export default Query;