import Header from "../components/Header";
import Footer from "../components/Footer";

const Landing = () => {
    return (  
        <body className="m-0 p-0 bg-custom-black h-screen text-white flex flex-col items-center justify-between">
            <Header nav={true}/>
            <div className="flex items-center justify-center gap-20 w-4/5">
                <div className="flex items-center justify-center border-boxBig border-custom-orange rounded-full w-boxBig h-boxBig mr-8">
                    <div className="flex items-center justify-center rounded-full w-56 h-56 overflow-hidden">
                        <img src="/images/profile.jpg" className="w-full h-full object-cover"/>
                    </div>
                </div>
                <div className="flex flex-col items-start w-96">
                    <h3 className="m-0 text-2xl font-medium">Manzi Karenzi</h3>
                    <p className="text-justify m-0 font-thin">
                        I am a seasoned full-stack software engineer with over 
                        8 years of professional experience, specializing in backend development. 
                        My expertise lies in crafting robust and scalable SaaS-based architectures 
                        on the Amazon AWS platform.
                    </p>
                    <button className="flex items-center justify-center border border-white bg-custom-black text-white w-32 h-10 rounded-3xl cursor-pointer mt-6 hover:bg-custom-orange hover:border-none">Download CV</button>
                </div>
            </div>
            <Footer/>
        </body>
    );
}
 
export default Landing;