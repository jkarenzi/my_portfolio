import Header from "../components/Header";
import Footer from "../components/Footer";

const Portfolio = () => {
    function scrollLeft() {
        let rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        let container = document.getElementsByClassName('project-inner-container')[0]
        let project = document.getElementsByClassName('actual-project')[0]
        let containerDimensions = project.getBoundingClientRect();
        let containerWidth = containerDimensions.width + rootFontSize;
        container.scrollLeft -= containerWidth;
    }
    
    function scrollRight() {
        let rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        let container = document.getElementsByClassName('project-inner-container')[0]
        let project = document.getElementsByClassName('actual-project')[0]
        let containerDimensions = project.getBoundingClientRect();
        let containerWidth = containerDimensions.width + rootFontSize;
        container.scrollLeft += containerWidth;
    }

    return (  
        <body className="m-0 p-0 flex items-center flex-col justify-between bg-custom-black text-white min-h-screen">
            <Header nav={true}/>
            <div className="flex flex-col items-center w-4/5 mt-8 gap-4">
                <h3 className="m-0 font-normal text-2xl text-custom-blue">EXPERIENCE</h3>
                <div className="flex flex-col gap-2 mt-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <img src="/images/meta-logo.png" width="20px" height="15px"/>
                            <h3 className="m-0 font-medium text-xl">Software engineer at Meta</h3>
                        </div>
                        <h3 className="m-0 font-medium text-xl">June 2019-Dec 2022</h3>
                    </div>
                    <div className="text-justify font-thin">
                        I played a pivotal role in developing cutting-edge technologies that power 
                        some of the world's most widely-used platforms. I collaborated closely with
                        cross-functional teams to design, implement, and deploy robust solutions 
                        that enhance user experiences and drive business growth. My contributions 
                        spanned a range of projects, from optimizing algorithmic performance to 
                        architecting scalable backend systems.
                    </div>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <img src="/images/google_p.png" width="20px" height="20px"/>
                            <h3 className="m-0 font-medium text-xl">Software engineer at Google</h3>
                        </div>
                        <h3 className="m-0 font-medium text-xl">Mar 2020-Aug 2021</h3>
                    </div>
                    <div className="text-justify font-thin">
                        Working in a fast-paced environment like Google has honed my problem-solving
                        skills and taught me the importance of teamwork and collaboration in delivering
                        high-quality software products. My time at Google has been incredibly rewarding,
                        allowing me to grow both personally and professionally while making a meaningful
                        impact on the world through technology.
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center w-11/12 mt-16 gap-4">
                <h3 className="m-0 font-normal text-2xl text-custom-blue">SKILLS</h3>
                <div className="flex items-center justify-center flex-wrap pl-8 pr-8 h-40 w-full gap-4">
                    <div className="flex flex-col items-center justify-center gap-4 w-24 h-28 rounded-lg bg-custom-lightGrey hover:w-28 hover:h-32 hover:transform scale-110 transition-transform duration-500 ease">
                        <img src="/images/html-5.png" width="30px" height="30px"/>
                        <h3 className="m-0 text-sm font-normal">HTML</h3>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 w-24 h-28 rounded-lg bg-custom-lightGrey hover:w-28 hover:h-32 hover:transform scale-110 transition-transform duration-500 ease">
                        <img src="/images/css-3.png" width="30px" height="30px"/>
                        <h3 className="m-0 text-sm font-normal">CSS</h3>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 w-24 h-28 rounded-lg bg-custom-lightGrey hover:w-28 hover:h-32 hover:transform scale-110 transition-transform duration-500 ease">
                        <img src="/images/js.png" width="30px" height="30px"/>
                        <h3 className="m-0 text-sm font-normal">Javascript</h3>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 w-24 h-28 rounded-lg bg-custom-lightGrey hover:w-28 hover:h-32 hover:transform scale-110 transition-transform duration-500 ease">
                        <img src="/images/ts.png" width="30px" height="30px"/>
                        <h3 className="m-0 text-sm font-normal">Typescript</h3>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 w-24 h-28 rounded-lg bg-custom-lightGrey hover:w-28 hover:h-32 hover:transform scale-110 transition-transform duration-500 ease">
                        <img src="/images/react.png" width="30px" height="30px"/>
                        <h3 className="m-0 text-sm font-normal">React.js</h3>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 w-24 h-28 rounded-lg bg-custom-lightGrey hover:w-28 hover:h-32 hover:transform scale-110 transition-transform duration-500 ease">
                        <img src="/images/node.png" width="50px" height="30px"/>
                        <h3 className="m-0 text-sm font-normal">Node.js</h3>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 w-24 h-28 rounded-lg bg-custom-lightGrey hover:w-28 hover:h-32 hover:transform scale-110 transition-transform duration-500 ease">
                        <img src="/images/python.png" width="30px" height="30px"/>
                        <h3 className="m-0 text-sm font-normal">Python</h3>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 w-24 h-28 rounded-lg bg-custom-lightGrey hover:w-28 hover:h-32 hover:transform scale-110 transition-transform duration-500 ease">
                        <img src="/images/mongo.png" width="25px" height="30px"/>
                        <h3 className="m-0 text-sm font-normal">Mongodb</h3>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 w-24 h-28 rounded-lg bg-custom-lightGrey hover:w-28 hover:h-32 hover:transform scale-110 transition-transform duration-500 ease">
                        <img src="/images/sql.png" width="25px" height="30px"/>
                        <h3 className="m-0 text-sm font-normal">SQL</h3>
                    </div>
                </div>  
            </div>
            <div className="flex flex-col items-center mt-16 mb-16 gap-8 w-11/12">
                <h3 className="m-0 font-normal text-2xl text-custom-blue">PROJECTS</h3>
                <div className="flex items-center justify-center w-full gap-8">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-custom-lightGrey mr-1 hover:bg-custom-arrowBlack" onClick={scrollLeft}>
                        <img src='/images/left-arrow.png' width="15px" height="15px"/>
                    </div>
                    <div className="flex items-center gap-4 w-innerCont overflow-x-auto scroll-smooth project-inner-container">
                        <div className="w-60 h-80 bg-custom-headerBlack rounded-md flex flex-col overflow-hidden shrink-0 actual-project">
                            <div className="w-full h-projectImgHeight overflow-hidden">
                                <img className="w-full h-full transition-transform duration-500 ease hover:transform scale-125" src="/images/many-books.png"/>
                            </div>
                            <div className="flex flex-col items-start justify-start bg-custom-headerBlack h-projectDescHeight">
                                <h3 className="m-0 text-custom-blue font-normal ml-4 mt-2 text-base">Knowledgebridge</h3>
                                <div className="text-justify font-light text-sm pl-4 pr-4 mt-1">
                                    A web platform that provides students access to free study materials in form of pdfs
                                </div>
                                <button className="flex items-center justify-center bg-custom-orange text-white border-none rounded-2xl w-24 h-6 self-center mt-2">Check out</button>
                            </div>
                        </div>
                        <div className="w-60 h-80 bg-custom-headerBlack rounded-md flex flex-col overflow-hidden shrink-0">
                            <div className="w-full h-projectImgHeight overflow-hidden">
                                <img className="w-full h-full transition-transform duration-500 ease hover:transform scale-125" src="/images/ecommerce.jpeg"/>
                            </div>
                            <div className="flex flex-col items-start justify-start bg-custom-headerBlack h-projectDescHeight">
                                <h3 className="m-0 text-custom-blue font-normal ml-4 mt-2 text-base">Shop</h3>
                                <div className="text-justify font-light text-sm pl-4 pr-4 mt-1">
                                    An ecommerce website where users can place orders and
                                    have goods delivered.
                                </div>
                                <button className="flex items-center justify-center bg-custom-orange text-white border-none rounded-2xl w-24 h-6 self-center mt-2">Check out</button>
                            </div>
                        </div>
                        <div className="w-60 h-80 bg-custom-headerBlack rounded-md flex flex-col overflow-hidden shrink-0">
                            <div className="w-full h-projectImgHeight overflow-hidden">
                                <img className="w-full h-full transition-transform duration-500 ease hover:transform scale-125" src="/images/calc.png"/>
                            </div>
                            <div className="flex flex-col items-start justify-start bg-custom-headerBlack h-projectDescHeight">
                                <h3 className="m-0 text-custom-blue font-normal ml-4 mt-2 text-base">Calculator</h3>
                                <div className="text-justify font-light text-sm pl-4 pr-4 mt-1">
                                    A simple calculator that can handle both simple and complex calculations
                                </div>
                                <button className="flex items-center justify-center bg-custom-orange text-white border-none rounded-2xl w-24 h-6 self-center mt-2">Check out</button>
                            </div>
                        </div>
                        <div className="w-60 h-80 bg-custom-headerBlack rounded-md flex flex-col overflow-hidden shrink-0">
                            <div className="w-full h-projectImgHeight overflow-hidden">
                                <img className="w-full h-full transition-transform duration-500 ease hover:transform scale-125" src="/images/many-books.png"/>
                            </div>
                            <div className="flex flex-col items-start justify-start bg-custom-headerBlack h-projectDescHeight">
                                <h3 className="m-0 text-custom-blue font-normal ml-4 mt-2 text-base">Knowledgebridge</h3>
                                <div className="text-justify font-light text-sm pl-4 pr-4 mt-1">
                                    A web platform that provides students access to free study materials in form of pdfs
                                </div>
                                <button className="flex items-center justify-center bg-custom-orange text-white border-none rounded-2xl w-24 h-6 self-center mt-2">Check out</button>
                            </div>
                        </div>
                        <div className="w-60 h-80 bg-custom-headerBlack rounded-md flex flex-col overflow-hidden shrink-0">
                            <div className="w-full h-projectImgHeight overflow-hidden">
                                <img className="w-full h-full transition-transform duration-500 ease hover:transform scale-125" src="/images/ecommerce.jpeg"/>
                            </div>
                            <div className="flex flex-col items-start justify-start bg-custom-headerBlack h-projectDescHeight">
                                <h3 className="m-0 text-custom-blue font-normal ml-4 mt-2 text-base">Shop</h3>
                                <div className="text-justify font-light text-sm pl-4 pr-4 mt-1">
                                    An ecommerce website where users can place orders and
                                    have goods delivered.
                                </div>
                                <button className="flex items-center justify-center bg-custom-orange text-white border-none rounded-2xl w-24 h-6 self-center mt-2">Check out</button>
                            </div>
                        </div>
                        <div className="w-60 h-80 bg-custom-headerBlack rounded-md flex flex-col overflow-hidden shrink-0">
                            <div className="w-full h-projectImgHeight overflow-hidden">
                                <img className="w-full h-full transition-transform duration-500 ease hover:transform scale-125" src="/images/calc.png"/>
                            </div>
                            <div className="flex flex-col items-start justify-start bg-custom-headerBlack h-projectDescHeight">
                                <h3 className="m-0 text-custom-blue font-normal ml-4 mt-2 text-base">Calculator</h3>
                                <div className="text-justify font-light text-sm pl-4 pr-4 mt-1">
                                    A simple calculator that can handle both simple and complex calculations
                                </div>
                                <button className="flex items-center justify-center bg-custom-orange text-white border-none rounded-2xl w-24 h-6 self-center mt-2">Check out</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-custom-lightGrey ml-1 hover:bg-custom-arrowBlack" onClick={scrollRight}>
                        <img src='/images/right-arrow.png' width="15px" height="15px"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </body>
    );
}
 
export default Portfolio;