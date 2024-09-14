/* eslint-disable react/jsx-key */
import image1 from '../../assets/Image Files/IMAGE.png'
import image2 from '../../assets/Image Files/CAMERA.png'
import image3 from '../../assets/Image Files/coffee machine V1 002.png'
import image4 from '../../assets/Image Files/image_2024_07_27T17_18_05_928Z.png'
import image5 from '../../assets/Image Files/Aureliag23 120 V1 - 0038.png'
import image6 from '../../assets/Image Files/Laptop Stand V1 - 0288.png'
import { TiLocationArrow } from 'react-icons/ti'
import { useEffect, useState } from 'react'
import SingleProductCard from './SingleProductCard'


const AnimationProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('animationProduct.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    console.log(products);

    return (
        <div className="mt-28 p-2 container mx-auto ">
            <div className="text-center p-5 lg:p-0">
                <p className="uppercase text-xs text-white tracking-[.25em]">Take a look at some of ouir 3d projects server</p>
                <h3 className="text-xl font-bold"><span className="text-[#d36724]">CineWave</span> <span className="uppercase text-white">3d product animation </span> </h3>
            </div>
            {/******* animation 3D product grid  *******/}
            <div className='flex justify-center items-center gap-5'>
                <div className='md:block hidden'>
                    <TiLocationArrow size={40} color='#d36724' className='-rotate-100' style={{ transform: 'rotate(225deg)' }} />
                </div>

                <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-10 mt-10'>

                    {
                        products.map(product => <SingleProductCard product={product}></SingleProductCard>)
                    }


                    {/* **** view more **** */}
                </div>
                <div className='md:block hidden'>

                    <TiLocationArrow size={40} color='#d36724' className='rotate-45' />
                </div>
            </div>
            <div className='text-center '>
                <p className='uppercase text-sm font-bold  border w-36 py-1 rounded-full border-[#d36724]  mt-10  text-[#d36724] mx-auto  bg-white'>view more</p>
            </div>
        </div>
    );
};

export default AnimationProducts;