import { useState } from 'react';
import image from '../../assets/Image Files/about (2).png'
const AboutUs = () => {

    const [readMore, setReadMore] = useState(false)

    const handleToogle = () =>{
        setReadMore(!readMore)
    }

    return (
        <div className="mt-28 container p-4 mx-auto">
            <div>
                <h2 className="font-bold uppercase text-3xl text-center "><span className="text-[#d36724]">About</span><span className='text-white'> us</span></h2>
                <div className=" lg:flex  gap-10 justify-center items-center">
                    <div className='lg:w-[1200px] text-white leading-none space-y-5'>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet molestiae qui excepturi sed quos. Tempora voluptas facere quod dolore accusantium qui eligendi in autem dolores!</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates recusandae neque itaque rem. Delectus ad atque pariatur hic quos, impedit sint ipsam officia. At, neque veritatis ex earum autem aliquam?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, delectus laudantium! Animi molestiae corrupti alias quas sunt commodi ea voluptate, atque corporis accusantium sint quidem quisquam soluta cumque at quis aperiam optio neque! Reiciendis si ipsam a labore quia distinctio maiores itaque in necessitatibus, optio, alias suscipit dicta voluptatibus nisi animi quam commodi maxime doloribus ab molestiae dolor praesentium tenetur! Nesciunt.</p>
                        {readMore && (
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolores nisi ea, natus ipsam accusantium debitis cupiditate? Aliquam eos temporibus est dolorum assumenda quasi odit obcaecati iusto blanditiis? Consequatur, voluptas rem animi voluptates, corporis possimus suscipit eligendi nobis asperiores aliquid dicta esse. Corporis ratione, vero minus repellendus maxime consequuntur iusto?</p>
                         )}
                        <div>
                            <p onClick={handleToogle} className='uppercase w-36 text-center py-2 rounded-sm font-normal text-white bg-[#d36724]'>{readMore ? 'Read less' :'Read More'}</p>
                        </div>
                    </div>
                    <div className="">
                        <img className='w-[800px] mt-7 lg:mt-0'  src={image} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;