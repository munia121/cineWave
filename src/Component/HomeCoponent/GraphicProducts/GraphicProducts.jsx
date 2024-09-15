/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import SingleProductCard from "../SingleProductCard";

const GraphicProducts = () => {
    const [products, setProducts] = useState([]);
    const [productLength, setProductLength] = useState(6)
    useEffect(() => {
        fetch('graphicProduct.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    console.log(products);


    return (
        <div>
            <div className="mt-10 p-2 container mx-auto ">
                <div className="text-center p-5 lg:p-0">
                    <p className="uppercase text-white text-xs tracking-[.25em]">Take a look at some of our graphic design server</p>
                    <h3 className="text-xl font-bold"><span className="text-[#d36724]">CineWave</span> <span className="uppercase text-white">graphic design </span> </h3>
                </div>
                {/******* GRAPHIC DESIGN  *******/}
                <div className='flex justify-center items-center gap-5'>
                    <div className='md:block hidden'>
                        <TiLocationArrow size={40} color='#d36724' className='-rotate-100' style={{ transform: 'rotate(225deg)' }} />
                    </div>

                    <div className='grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-10 mt-10'>

                        {
                            products.slice(0, productLength).map(product => <SingleProductCard product={product}></SingleProductCard>)
                        }


                        {/* **** view more **** */}
                    </div>
                    <div className='md:block hidden'>

                        <TiLocationArrow size={40} color='#d36724' className='rotate-45' />
                    </div>
                </div>
                <div className='text-center '>
                    <p onClick={() => setProductLength(products.length)} className={`${productLength === products.length && 'hidden'} uppercase text-sm font-bold  border w-36 py-1 rounded-full border-[#d36724]  mt-10  text-[#d36724] mx-auto  bg-white`}>view more</p>
                </div>
            </div>
            {/* some text here */}
            <div className="md:px-10">
                <div className="container  border-x-2 border-b-2 px-10 pb-6 mt-8 mx-auto">
                    <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui cumque rerum eveniet. Ullam impedit ad deleniti.   Eius tempore libero error sapiente atque dolorem repudiandae dolor! Alias  voluptatem facilis sequi,  cumque explicabo incidunt similique  maxime accusantium maiores dolorum labore itaque praesentium modi minus asperiores deserunt reprehenderit magni quidem veniam neque harum nostrum. Vero a animi iusto minus possimus inventore deleniti hic nulla laboriosam, nemo nesciunt odit quaerat esse. Minus nam commodi magnam animi debitis aspernatur perspiciatis pariatur .Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui cumque rerum eveniet. Ullam impedit ad deleniti.   Eius tempore libero Eius tempore </p>
                </div>
            </div>
        </div>
    );
};

export default GraphicProducts;