import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Loader } from "../components/Loader";


const Contact = () => {
    const {token, userInfo} = useContext(AuthContext) 
    const url = process.env.REACT_APP_BACKEND_URL
    const [query, setQuery] = useState("")
    const [toggleLoader, setToggleLoader] = useState(false)

    const submitQuery = async(e) => {
        e.preventDefault()
        const formData = {
            userId: userInfo._id,
            query
        }

        try{
            const resp = await fetch(`${url}/queries/create_query`,{
                method:"POST",
                headers:{
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
        
            let response = await resp.json()
            
            if(resp.status === 201){
                alert(response.msg)
            }else{
                alert(response.msg)
            }
        }catch(err){
            alert(err.message)
        }
    }

    return (
        <body className="m-0 p-0 flex items-center flex-col justify-between bg-custom-black text-white min-h-screen">
            <Header nav={true}/>
            <form onSubmit={submitQuery} className="flex flex-col items-start gap-4 mt-12 mb-12 w-96">
                <h3 className="m-0 font-medium text-2xl">Get in touch</h3>
                <div className="flex flex-col items-start gap-2 w-full">
                    <label>Username</label>
                    <input type="text" className="w-full h-8 bg-custom-black border-boxBig border-custom-orange text-white rounded-lg"/>
                    <div className="bg-red-600"></div>
                </div>
                <div className="flex flex-col items-start gap-2 w-full">
                    <label>Email</label>
                    <input type="text" className="w-full h-8 bg-custom-black border-boxBig border-custom-orange text-white rounded-lg"/>
                    <div className="bg-red-600"></div>
                </div>
                <div className="flex flex-col items-start gap-2 w-full">
                    <label>Message</label>
                    <textarea onChange={(e) => setQuery(e.target.value)} className="bg-custom-black text-white border-boxBig border-custom-orange w-full h-32 rounded-lg"></textarea>
                    <div className="bg-red-600"></div>
                </div>
                <button type="submit" className="flex justify-center items-center bg-custom-orange text-white border-none rounded-3xl w-28 h-8 mt-4 no-underline">Submit</button>
                { toggleLoader && <Loader/>}
            </form>
            <Footer/>
        </body> 
    );
}
 
export default Contact;