import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { TiPhone } from "react-icons/ti";

const OurContacts = () => {
    return (
        <div className=" mt-20 mb-10">
            <div>
                <div className="text-center ">
                    <h2 className="lg:text-4xl text-2xl font-bold text-white">PEOPLE <span className="text-orange-500">CONTACTS</span></h2>
                    <p className=" mt-2 lg:w-[700px] mx-auto text-white">Lorem ipsum dolor sit amet,   dfdfhfgj  hshhh ggconsectetur adipiscing elit.consectetur adipiscing elit. consectetur adipiscing elit.</p>
                </div>
                <div className="text-center text-white mt-8 ">
                    <div className="flex px-2 lg:gap-2 items-center justify-center ">
                        <IoLocationSharp size={30} className="text-orange-500" />
                        <p className="">Lorem ipsum dolor sit amet consectetur </p>
                    </div>
                    <div className="lg:flex text-center  items-center justify-center gap-10">
                        <div className="flex gap-2 items-center justify-center ">
                            <TiPhone size={20} className="text-orange-500" />
                            <p>(123) 456-78-90</p>
                        </div>
                        <div className="flex items-center justify-center gap-2 ">
                            <TiPhone size={20} className="text-orange-500" />
                            <p>(123) 456-78-90</p>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <MdEmail size={20} className="text-orange-500" />
                            <p>info@website.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurContacts;