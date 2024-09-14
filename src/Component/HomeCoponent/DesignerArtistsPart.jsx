
// eslint-disable-next-line no-unused-vars
import image1 from '../../assets/Image Files/abc.png'
import video from '../../assets/Image Files/2512876-hd_1920_1080_30fps.mp4'
const DesignerArtistsPart = () => {
    return (
        <div className="container mx-auto mt-10 text-white">
            <div className="text-center">
                <h2 className="uppercase font-bold tracking-[.2em] ">Looking  for talented 3d designers and 3d artists? </h2>
                <p className="text-[10px] tracking-[.25em] tracking-widest">Innowise is at your service to create an unparalleled experience fro our users by stunnning 3d design</p>
            </div>
            <div className='mt-10 '>
                {/* <img className='w-[1000px] h-[400px] mx-auto' src={image1} alt="" /> */}
                {/* <video className='w-[1000px]  border h-[400px] mx-auto' width="1000px" controls src={video}></video> */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/iVO6C4dVBYg?si=017fo1o4OQt4n-gD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="md:px-10">
                <div className="lg:w-[1200px] px-10 pb-6 mt-10 mx-auto">
                    <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui cumque rerum eveniet. Ullam impedit ad deleniti.   Eius tempore libero error sapiente atque dolorem repudiandae dolor! Alias  voluptatem facilis sequi,  cumque explicabo incidunt similique  maxime accusantium maiores dolorum labore itaque praesentium modi minus asperiores deserunt reprehenderit magni quidem veniam neque harum nostrum. Vero a animi iusto minus possimus inventore deleniti hic nulla laboriosam, nemo nesciunt odit quaerat esse. Minus nam commodi magnam animi debitis aspernatur perspiciatis pariatur .Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui cumque rerum eveniet. Ullam impedit ad deleniti.   Eius tempore libero Eius tempore </p>
                </div>
            </div>
        </div>
    );
};

export default DesignerArtistsPart;