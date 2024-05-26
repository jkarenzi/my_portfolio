const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-between w-full h-48 bg-custom-headerBlack text-white pt-8 pb-2">
            <div className="flex justify-between w-11/12">
                <div className="flex flex-col items-start gap-4">
                    <div className="flex items-center gap-2">
                        <img src="/images/email.png" width="20px" height="20px"/>
                        <h4 className="m-0 font-normal">j.karenzi@alustudent.com</h4>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src="/images/telephone.png" width="20px" height="20px"/>
                        <h4 className="m-0 font-normal">+250789906160</h4>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-4">
                    <h3 className="m-0 font-semibold text-2xl">Socials</h3>
                    <div className="flex items-center gap-4">
                        <img src='/images/youtube.png' width="40px" height="30px"/>
                        <img src='/images/instagram.png' width="30px" height="30px"/>
                        <img src='/images/whatsapp.png' width="35px" height="35px"/>
                        <img src='/images/linkedin.png' width="30px" height="30px"/>
                        <img src='/images/x.png' width="30px" height="30px"/>
                    </div>
                </div>
            </div>
            <h4 className="m-0 font-normal text-sm">Copyright@2024. All rights reserved</h4>
        </footer>
    );
}
 
export default Footer;