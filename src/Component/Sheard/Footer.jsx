
const Footer = () => {
    return (
        <div className="bg-[#e06534]  mx-auto text-white mt-4 py-10 lg:flex gap-10 justify-around">
            <div className="grid-cols-4">
                <div className="grid lg:grid-cols-3 grid-cols-2  gap-5 lg:gap-20 " >
                    <div className=" text-center text-lg">
                        <p>Contact</p>
                        <p>+8801234560</p>
                        <p>+8801234560</p>
                        <p>+8801234560</p>
                    </div>
                    <div className="text-center text-lg">
                        <p>Support</p>
                        <p>whats App</p>
                        <p>Skype</p>
                        <p>Mail</p>
                    </div>
                    <div className="text-center  lg:ml-0 text-lg">
                        <p>Experts</p> 
                        <p>3D Designer</p>
                        <p>Graphic Design</p>
                        <p>Web Design</p>
                        <p>Barander</p>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <h2 className="text-4xl text-center leading-relaxed font-extrabold uppercase italic ">We are open <br /> 24/7</h2>
                <p>Location: Main Road, City</p>
            </div>
        </div>
    );
};

export default Footer;