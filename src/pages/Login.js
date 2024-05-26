import { Link } from "react-router-dom";
import { useState } from "react";
import { successToast,errorToast } from "../components/Toast";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "../components/Loader";

const Login = () => {
    const navigate = useNavigate()
    const {dispatch} = useContext(AuthContext)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [toggleLoader, setToggleLoader] = useState(false)
    const [isActive, setIsActive] = useState(false)

    const decodeJWT = (token) => {
        const parts = token.split('.');
        const payload = parts[1];
    
        const decodedPayload = atob(payload);
    
        const jsonPayload = JSON.parse(decodedPayload);
    
        return jsonPayload.user;
    }

    const url = process.env.REACT_APP_BACKEND_URL

    const login = async (e) => {
        e.preventDefault()
        const formData = {
            username,
            password
        }
        setIsActive(true)

        try{
            const resp = await fetch(`${url}/auth/login`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },        
                body: JSON.stringify(formData)
            })
    
            let response = await resp.json()
            setIsActive(false)
            console.log(response)
            if(resp.status === 200){
                successToast(response.msg)
                dispatch({type:'LOGIN',token:response.token, userInfo:decodeJWT(response.token)})
                navigate("/")
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
                <h3 className="m-0 mt-4 mb-4 text-2xl font-bold">Login</h3>
                <form onSubmit={login} className="flex flex-col items-center gap-6 w-5/6 mt-4">
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
                    <button type="submit" className={`flex justify-center items-center ${isActive?'bg-custom-darkOrange':'bg-custom-orange'} text-white border-none rounded-3xl w-32 h-10 mt-4 no-underline`}>Login</button>
                </form>
                <h3 className="m-0 mt-4 mb-4">OR</h3>
                <button className="flex justify-center items-center bg-custom-orange text-white border-none rounded-3xl w-56 h-10 gap-2">
                    <img src="/images/google.png" width="20px" height="20px"/>
                    Sign in with Google
                </button>
                <div className="flex items-center gap-2 mt-4">
                    <h3 className="m-0 font-normal text-base">Dont have an account?</h3>
                    <Link to="/signup" className="text-custom-orange underline">Sign up</Link>
                </div>
            </div>
        </body>
    );
}
 
export default Login;