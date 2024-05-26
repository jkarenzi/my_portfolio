import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { errorToast, successToast } from "../components/Toast";

const Profile = () => {
    const {token, userInfo} = useContext(AuthContext)

    const url = process.env.REACT_APP_BACKEND_URL
    const [toggleUsernameOverlay, setToggleUsernameOverlay] = useState(false)
    const [togglePasswordOverlay, setTogglePasswordOverlay] = useState(false)
    const [toggleEmailOverlay, setToggleEmailOverlay] = useState(false)
    const [toggleProfileOverlay, setToggleProfileOverlay] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [newUsername, setNewUsername] = useState("")
    const [password, setPassword] = useState("")
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newProfile, setNewProfile] = useState(null)

    const changeUsername = async(e) => {
        e.preventDefault()
        const formData = {
            id: userInfo._id,
            password,
            newUsername
        }

        setIsActive(true)

        try{
            const resp = await fetch(`${url}/usermgt/update_username`,{
                method:"POST",
                headers:{
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
        
            let response = await resp.json()
            
            if(resp.ok){
                successToast(response.msg)
                setToggleUsernameOverlay(false)
            }else{
                errorToast(response.msg)
            }
        }catch(err){
            errorToast(err.message)
        }
    }

    const changePassword = async(e) => {
        e.preventDefault()
        const formData = {
            id:userInfo._id,
            oldPassword,
            newPassword
        }

        setIsActive(true)
    
        try{
            const resp = await fetch(`${url}/usermgt/update_password`,{
                method:"POST",
                headers:{
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
        
            let response = await resp.json()
            setIsActive(false)
            
            if(resp.ok){
                setTogglePasswordOverlay(false)
                successToast(response.msg)
            }else{
                errorToast(response.msg)
            }     
        }catch(err){
            errorToast(err.message)
        }
    }

    const changeEmail = async(e) => {
        e.preventDefault()
        const formData = {
            id:userInfo._id,
            password,
            newEmail
        }

        setIsActive(true)

        try{
            const resp = await fetch(`${url}/usermgt/update_email`,{
                method:"POST",
                headers:{
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
        
            let response = await resp.json()
            setIsActive(false)
            
            if(resp.ok){
                setToggleEmailOverlay(false)
                successToast(response.msg)
            }else{
                errorToast(response.msg)
            }        
        }catch(err){
            errorToast(err.message)
        }
    }

    const changeProfile = async(e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("id", userInfo._id)
        formData.append("password", password)
        formData.append("image", newProfile)

        setIsActive(true)

        try{
            const resp = await fetch(`${url}/usermgt/update_profile_img`,{
                method:"POST",
                headers:{
                    'Authorization': `Bearer ${token}`,
                },
                body: formData
            })
        
            let response = await resp.json()
            setIsActive(false)
            
            if(resp.ok){
                setToggleProfileOverlay(false)
                successToast(response.msg)
            }else{
                errorToast(response.msg)
            }
        }catch(err){
            errorToast(err.message)
        }
    }

    return (  
        <body className="m-0 p-0 flex items-center flex-col justify-between bg-custom-black text-white min-h-screen">
            <Header nav={true}/>
            { toggleUsernameOverlay && <div className="fixed w-full h-screen flex items-center justify-center z-10 bg-black bg-opacity-50">
                <div className="flex flex-col items-center justify-between rounded-lg bg-custom-lightGrey w-80 h-80">
                    <div className="flex items-center justify-between w-11/12 pt-2">
                        <h3 className="m-0 font-medium text-xl">Update Username</h3>
                        <img src="/images/close.png" className="cursor-pointer" width="15px" height="15px" onClick={() => setToggleUsernameOverlay(false)}/>
                    </div>
                    <form onSubmit={changeUsername} className="flex items-center flex-col w-11/12 gap-6 mb-6">
                        <div className="flex items-start flex-col w-full gap-3">
                            <label className="m-0">Password</label>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} className="outline-none text-white bg-custom-lightGrey border-b-boxBig border-custom-orange w-full" required/>
                        </div>
                        <div className="flex items-start flex-col w-full gap-3">
                            <label className="m-0">New Username</label>
                            <input type="text" onChange={(e) => setNewUsername(e.target.value)} className="outline-none text-white bg-custom-lightGrey border-b-boxBig border-custom-orange w-full" required/>
                        </div>
                        <button type="submit" className={`flex items-center justify-center ${isActive?'bg-custom-darkOrange':'bg-custom-orange'} text-white border-none rounded-2xl w-24 h-8`}>Submit</button>
                    </form>
                </div>
            </div>}
            { togglePasswordOverlay && <div className="fixed w-full h-screen flex items-center justify-center z-10 bg-black bg-opacity-50">
                <div className="flex flex-col items-center justify-between rounded-lg bg-custom-lightGrey w-80 h-80">
                    <div className="flex items-center justify-between w-11/12 pt-2">
                        <h3 className="m-0 font-medium text-xl">Update Password</h3>
                        <img src="/images/close.png" className="cursor-pointer" width="15px" height="15px" onClick={() => setTogglePasswordOverlay(false)}/>
                    </div>
                    <form onSubmit={changePassword} className="flex items-center flex-col w-11/12 gap-6 mb-6">
                        <div className="flex items-start flex-col w-full gap-3">
                            <label className="m-0">Old Password</label>
                            <input type="password" onChange={(e) => setOldPassword(e.target.value)} className="outline-none text-white bg-custom-lightGrey border-b-boxBig border-custom-orange w-full" required/>
                        </div>
                        <div className="flex items-start flex-col w-full gap-3">
                            <label className="m-0">New Password</label>
                            <input type="password" onChange={(e) => setNewPassword(e.target.value)} className="outline-none text-white bg-custom-lightGrey border-b-boxBig border-custom-orange w-full" required/>
                        </div>
                        <button type="submit" className={`flex items-center justify-center ${isActive?'bg-custom-darkOrange':'bg-custom-orange'} text-white border-none rounded-2xl w-24 h-8`}>Submit</button>
                    </form>
                </div>
            </div>}
            { toggleEmailOverlay && <div className="fixed w-full h-screen flex items-center justify-center z-10 bg-black bg-opacity-50">
                <div className="flex flex-col items-center justify-between rounded-lg bg-custom-lightGrey w-80 h-80">
                    <div className="flex items-center justify-between w-11/12 pt-2">
                        <h3 className="m-0 font-medium text-xl">Update Email</h3>
                        <img src="/images/close.png" className="cursor-pointer" width="15px" height="15px" onClick={() => setToggleEmailOverlay(false)}/>
                    </div>
                    <form onSubmit={changeEmail} className="flex items-center flex-col w-11/12 gap-6 mb-6">
                        <div className="flex items-start flex-col w-full gap-3">
                            <label className="m-0">Password</label>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} className="outline-none text-white bg-custom-lightGrey border-b-boxBig border-custom-orange w-full" required/>
                        </div>
                        <div className="flex items-start flex-col w-full gap-3">
                            <label className="m-0">New Email</label>
                            <input type="email" onChange={(e) => setNewEmail(e.target.value)} className="outline-none text-white bg-custom-lightGrey border-b-boxBig border-custom-orange w-full" required/>
                        </div>
                        <button type="submit" className={`flex items-center justify-center ${isActive?'bg-custom-darkOrange':'bg-custom-orange'} text-white border-none rounded-2xl w-24 h-8`}>Submit</button>
                    </form>
                </div>
            </div>}
            { toggleProfileOverlay && <div className="fixed w-full h-screen flex items-center justify-center z-10 bg-black bg-opacity-50">
                <div className="flex flex-col items-center justify-between rounded-lg bg-custom-lightGrey w-80 h-80">
                    <div className="flex items-center justify-between w-11/12 pt-2">
                        <h3 className="m-0 font-medium text-xl">Update Profile Image</h3>
                        <img src="/images/close.png" className="cursor-pointer" width="15px" height="15px" onClick={() => setToggleProfileOverlay(false)}/>
                    </div>
                    <form onSubmit={changeProfile} className="flex items-center flex-col w-11/12 gap-6 mb-6">
                        <div className="flex items-start flex-col w-full gap-3">
                            <label className="m-0">Password</label>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} className="outline-none text-white bg-custom-lightGrey border-b-boxBig border-custom-orange w-full" required/>
                        </div>
                        <div className="flex items-start flex-col w-full gap-3">
                            <label className="m-0">New Profile Image</label>
                            <input type="file" onChange={(e) => setNewProfile(e.target.files[0])} accept="image/*" id="new-image" required/>
                        </div>
                        <button type="submit" className={`flex items-center justify-center ${isActive?'bg-custom-darkOrange':'bg-custom-orange'} text-white border-none rounded-2xl w-24 h-8`}>Submit</button>
                    </form>
                </div>
            </div>}
            <div className="border-b-boxBig border-custom-orange p-4 mt-4 w-11/12 text-left">
                Manzi Karenzi's Profile Settings
            </div>
            <div className="flex items-center justify-center gap-12 w-full mt-12 mb-20">
                <div className="relative flex items-center justify-center border-boxBig border-custom-orange rounded-full w-boxBig h-boxBig mr-8">
                    <div className="flex items-center justify-center rounded-full w-56 h-56 overflow-hidden">
                        <img src="/images/profile.jpg" className="w-full h-full object-cover"/>
                    </div>
                    <img src="/images/change-profile.png" width="30px" height="30px" className="absolute top-40 right-0 cursor-pointer" onClick={() => setToggleProfileOverlay(true)}/>
                </div>
                <div className="flex flex-col items-start justify-around bg-custom-lightGrey w-profileWidth h-60 pl-8 rounded-lg">
                    <div className="flex items-center gap-4">
                        <h3 className="m-0 font-normal text-base">Username: Dummy Content</h3>
                        <img src="/images/pencil.png" className="cursor-pointer" width="15px" height="15px" onClick={() => setToggleUsernameOverlay(true)}/>
                    </div>
                    <div className="flex items-center gap-4">
                        <h3 className="m-0 font-normal text-base">Email: Dummy Content</h3>
                        <img src="/images/pencil.png" className="cursor-pointer" width="15px" height="15px" onClick={() => setToggleEmailOverlay(true)}/>
                    </div>
                    <div className="flex items-center gap-4">
                        <h3 className="m-0 font-normal text-base">Password: ************</h3>
                        <img src="/images/pencil.png" className="cursor-pointer" width="15px" height="15px" onClick={() => setTogglePasswordOverlay(true)}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </body>
    );
}
 
export default Profile;