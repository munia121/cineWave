import AboutUs from "../../Component/HomeCoponent/AboutUs";
import AnimationProducts from "../../Component/HomeCoponent/AnimationProducts";
import Banner from "../../Component/HomeCoponent/Banner";
import DesignerArtistsPart from "../../Component/HomeCoponent/DesignerArtistsPart";
import GraphicProducts from "../../Component/HomeCoponent/GraphicProducts/GraphicProducts";
import OurAdvantages from "../../Component/HomeCoponent/OurAdvantages";
import Ourservices from "../../Component/HomeCoponent/Ourservices";
import ProductServices from "../../Component/HomeCoponent/ProductServices";
import Footer from "../../Component/Sheard/Footer";
import bg_image from '../../assets/Website/Website-background.jpg'

const HomePage = () => {
    return (
        <div className="bg-black  mx-auto" >
            <div className=" mx-auto bg-cover" style={{ backgroundImage: `url(${bg_image})` }}>
            <Banner></Banner>
                <ProductServices></ProductServices>
                <AnimationProducts></AnimationProducts>
                <GraphicProducts></GraphicProducts>
            </div>
            <DesignerArtistsPart></DesignerArtistsPart>
            <OurAdvantages></OurAdvantages>
            <AboutUs></AboutUs>
            <Ourservices></Ourservices>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;