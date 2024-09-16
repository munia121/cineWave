
const OurSkills = () => {
    return (
        <div>
            <div>
                <div className="text-center mb-12">
                    <h2 className="lg:text-4xl text-2xl font-bold text-white">OUR <span className="text-orange-500">SKILLS</span></h2>
                    <p className=" mt-2 lg:w-[700px] mx-auto text-white">Lorem ipsum dolor sit amet,   dfdfhfgj  hshhh ggconsectetur adipiscing elit.consectetur adipiscing elit. consectetur adipiscing elit.</p>
                </div>
            </div>
            {/* **************************** */}
            <div className='container lg:block hidden text-white mx-auto text-center lg:space-y-0 space-y-5 lg:flex justify-center gap-20 mb-20 '>
                <div className="">
                    <div className="radial-progress   text-yellow-400" style={{ "--value": "45", "--size": "12rem", "--thickness": "2rem" }} role="progressbar">45%</div>
                    <div className="mt-3">
                        <p>CODING</p>
                    </div>
                </div>

                <div >
                    <div className="radial-progress text-red-600" style={{ "--value": "60", "--size": "12rem", "--thickness": "2rem" }} role="progressbar">60%</div>
                    <div className="mt-3">
                        <p>SEO & ADS</p>
                    </div>
                </div>

                <div>
                    <div className="radial-progress text-orange-500" style={{ "--value": "75", "--size": "12rem", "--thickness": "2rem" }} role="progressbar">75%</div>
                    <div className="mt-3">
                        <p>BRANDING</p>
                    </div>
                </div>

                <div className="">
                    <div className="radial-progress text-white" style={{ "--value": "80", "--size": "12rem", "--thickness": "2rem" }} role="progressbar">80%</div>
                    <div className="mt-3">
                        <p>WEB DESIGN</p>
                    </div>
                </div>

                {/* ** small d*** */}
            </div>
                <div className=" lg:hidden space-y-6 block">
                    <div className="flex gap-10 justify-center">
                        <div
                            className="radial-progress  text-yellow-400"
                            style={{
                                "--value": "45",
                                "--size": "6rem",  // Default for small screens
                                "--thickness": ".5rem"
                            }}
                            role="progressbar"
                        // Medium and large screen sizes
                        >
                            45%
                        </div>
                        <div
                            className="radial-progress md:[--size:6rem] lg:[--size:8rem] text-red-400"
                            style={{
                                "--value": "60",
                                "--size": "6rem",  // Default for small screens
                                "--thickness": ".5rem"
                            }}
                            role="progressbar"
                        // Medium and large screen sizes
                        >
                            60%
                        </div>
                    </div>
                    <div className="flex gap-10 justify-center">
                        <div
                            className="radial-progress md:[--size:6rem] lg:[--size:8rem] text-orange-500"
                            style={{
                                "--value": "75",
                                "--size": "6rem",  // Default for small screens
                                "--thickness": ".5rem"
                            }}
                            role="progressbar"
                        // Medium and large screen sizes
                        >
                            75%
                        </div>
                        <div
                            className="radial-progress md:[--size:6rem] lg:[--size:8rem] text-white"
                            style={{
                                "--value": "80",
                                "--size": "6rem",  // Default for small screens
                                "--thickness": ".5rem"
                            }}
                            role="progressbar"
                        // Medium and large screen sizes
                        >
                            80%
                        </div>
                    </div>
                </div>

            {/* ************************* */}
            <div className=' container mx-auto mt-10 bg-orange-500 py-16 text-center' >
                <div>
                    <p className='lg:text-5xl text-3xl  text-white font-semibold px-2'>START YOU NEW PROJECT</p>
                </div>
                <div className='text-center lg:flex justify-center items-center'>
                    <form action="" className='lg:flex '>
                        <div className='lg:flex lg:space-y-0 space-y-3 gap-3 mt-10 text-center justify-center items-center'>
                            <div className='flex justify-center items-center'>
                                <input className='bg-white px-4 py-2 flex items-center rounded-md ' type="text" name="name" id="" placeholder='YOUR NAME' />
                            </div>
                            <div className='flex justify-center items-center'>
                                <input className='bg-white px-4 py-2 flex items-center rounded-md ' type="email" name="email" id="" placeholder='YOUR EMAIL' />
                            </div>
                            <div className='flex justify-center items-center'>
                                <input className='bg-white px-4 py-2 flex items-center rounded-md ' type="number" name="number" id="" placeholder='YOUR PHONE' />
                            </div>
                            <button className='bg-yellow-500 lg:ml-5 rounded-md text-white px-3 py-2'>SEND REQUEST</button>
                        </div>
                    </form>
                </div>
                <div className='lg:w-[700px] px-2 mx-auto mt-10 text-white'>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nisi qui assumenda? Iure consequatur tempora aut doloremque exercita maiores et ipsam !</p>
                </div>
            </div>
        </div>
    );
};

export default OurSkills;