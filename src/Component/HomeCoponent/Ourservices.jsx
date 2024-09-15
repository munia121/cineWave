import { GiRoundStar } from "react-icons/gi";

const Ourservices = () => {
    return (
        <div id="services" className="container mx-auto mt-28">
            <div className="text-center p-5">
                <h2 className="text-3xl uppercase font-bold"><span className="text-white">Our</span> <span className="text-[#d36724]">services</span></h2>
                <p className="md:w-[600px] text-white mx-auto leading-none mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vero omnis quibusdam repellendus, nulla perferendis.</p>
            </div>
            {/* grid */}
            <div className="grid lg:grid-cols-4 md:grid-cols-2 ">
                <div className="p-5">
                    <div className="w-14 h-14 relative top-7 md:ml-[130px]  flex justify-center items-center rounded-full  bg-yellow-500">
                        <GiRoundStar size={30} className=" text-[#d05d2f]"/>
                    </div>
                    <div>
                        <div className=" h-44 rounded-md px-8 py-10 text-center bg-white">
                            <h3 className="uppercase text-black font-bold ">3d design</h3>
                            <p className="leading-none mt-2">Lorem ipsum dolor sit, ametfsad conse ct vcxzvetur adipisicing elit. Soluta, ad.</p>
                            <p className="underline text-[#d36724] mt-3">read more</p>
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <div className="w-14 h-14 relative top-7 md:ml-[130px]  flex justify-center items-center rounded-full  bg-yellow-500">
                        <GiRoundStar size={30} className=" text-[#d05d2f]"/>
                    </div>
                    <div>
                        <div className=" h-44 rounded-md px-8 py-10 text-center bg-white">
                            <h3 className="uppercase text-black font-bold ">3d design</h3>
                            <p className="leading-none mt-2">Lorem ipsum dolor sit, ametfsad conse ct vcxzvetur adipisicing elit. Soluta, ad.</p>
                            <p className="underline text-[#d36724] mt-3">read more</p>
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <div className="w-14 h-14 relative top-7 md:ml-[130px]  flex justify-center items-center rounded-full  bg-yellow-500">
                        <GiRoundStar size={30} className=" text-[#d05d2f]"/>
                    </div>
                    <div>
                        <div className=" h-44 rounded-md px-8 py-10 text-center bg-white">
                            <h3 className="uppercase text-black font-bold ">3d design</h3>
                            <p className="leading-none mt-2">Lorem ipsum dolor sit, ametfsad conse ct vcxzvetur adipisicing elit. Soluta, ad.</p>
                            <p className="underline text-[#d36724] mt-3">read more</p>
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <div className="w-14 h-14 relative top-7 md:ml-[130px]  flex justify-center items-center rounded-full  bg-yellow-500">
                        <GiRoundStar size={30} className=" text-[#d05d2f]"/>
                    </div>
                    <div>
                        <div className=" h-44 rounded-md px-8 py-10 text-center bg-white">
                            <h3 className="uppercase text-black font-bold ">3d design</h3>
                            <p className="leading-none mt-2">Lorem ipsum dolor sit, ametfsad conse ct vcxzvetur adipisicing elit. Soluta, ad.</p>
                            <p className="underline text-[#d36724] mt-3">read more</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ourservices;