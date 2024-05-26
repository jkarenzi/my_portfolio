import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { successToast, errorToast } from "../components/Toast";
import { Loader } from "../components/Loader";

const Signup = () => {
    const navigate = useNavigate()
    const url = process.env.REACT_APP_BACKEND_URL
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [toggleLoader, setToggleLoader] = useState(false)

    const signup = async(e) => {
        e.preventDefault()
        const formData = {
            username,
            email,
            password
        }
        setToggleLoader(true)

        try{
            const resp = await fetch(`${url}/auth/signup`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },        
                body: JSON.stringify(formData)
            })
        
            let response = await resp.json()
            setToggleLoader(false)

            if(resp.status === 201){
                successToast(response.msg)
                navigate("/login")
            }else{
                errorToast(response.msg)
            }
        }catch(err){
            errorToast(err.message)
        }
    }

    return (  
        <body className="flex items-center justify-center h-screen bg-custom-black text-white">
            <div className="flex flex-col items-center w-2/6 min-h-loginHeight pb-8 bg-custom-headerBlack rounded-md">
                <h3 className="m-0 mt-4 mb-4 text-2xl font-bold">Signup</h3>
                <form onSubmit={signup} className="flex flex-col items-center gap-6 w-5/6 mt-4">
                    <div className="flex flex-col items-start gap-2 w-full">
                        <label>Email</label>
                        <input type="text" onChange={(e) => setEmail(e.target.value)} className="w-full h-8 rounded-md bg-custom-black border border-custom-orange text-white"/>
                        <div className="bg-red-600 text-sm"></div>
                    </div>
                    <div className="flex flex-col items-start gap-2 w-full">
                        <label>Username</label>
                        <input type="text" onChange={(e) => setUsername(e.target.value)} className="w-full h-8 rounded-md bg-custom-black border border-custom-orange text-white"/>
                        <div className="bg-red-600 text-sm"></div>
                    </div>
                    <div className="flex flex-col items-start gap-2 w-full">
                        <label>Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} className="w-full h-8 rounded-md bg-custom-black border border-custom-orange text-white"/>
                        <div className="bg-red-600 text-sm"></div>
                    </div>
                    <button type="submit" className="flex justify-center items-center bg-custom-orange text-white border-none rounded-3xl w-32 h-10 mt-4 no-underline">Signup</button>
                </form>
                <div className="flex items-center gap-2 mt-4">
                    <h3 className="m-0 font-normal text-base">Already have an account?</h3>
                    <Link to="/login" className="text-custom-orange underline">Login</Link>
                </div>
                { toggleLoader && <Loader/>}
            </div>
        </body>
    );
}
 
export default Signup;