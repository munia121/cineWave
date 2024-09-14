import logo1 from '../../assets/Logo/Innovation-Logo.gif'
import logo2 from '../../assets/Logo/Quality-logo.gif'
import logo3 from '../../assets/Logo/Experience-logo.gif'
import logo4 from '../../assets/Logo/Happy-client-logo.gif'
import logo5 from '../../assets/Logo/Support-logo.gif'


const OurAdvantages = () => {
    return (
        <div className=' mx-auto'>
            <div className="text-center lg:w-[600px] mx-auto mt-28">
                <h2 className="uppercase text-white text-2xl font-bold">Our <span className="text-[#d36724]">Advantages</span></h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quis accusamus atque provident dolorum neque quasi natus molestiae illo similique.</p>
            </div>
            <div className='md:flex  justify-center mt-10'>
                <div className='lg:w-[230px] text-center'>
                    <img className='w-44 mx-auto' src={logo1} alt="" />
                    <p className='text-xs px-5 leading-none text-white '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. adipisicing  d!</p>
                </div>
                <div className='lg:w-[230px] text-center'>
                    <img className='w-44 mx-auto' src={logo2} alt="" />
                    <p className='text-xs px-5 leading-none text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. adipisicing  d!</p>
                </div>
                <div className='lg:w-[230px] text-center'>
                    <img className='w-44 mx-auto' src={logo3} alt="" />
                    <p className='text-xs px-5 leading-none text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. adipisicing  d!</p>
                </div>
                <div className='lg:w-[230px] text-center'>
                    <img className='w-44 mx-auto' src={logo4} alt="" />
                    <p className='text-xs px-5 leading-none text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. adipisicing  d!</p>
                </div>
                <div className='lg:w-[230px] text-center'>
                    <img className='w-44 mx-auto' src={logo5} alt="" />
                    <p className='text-xs px-5 leading-none text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. adipisicing  d!</p>
                </div>
            </div>
            
        </div>
    );
};

export default OurAdvantages;