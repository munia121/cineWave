import AboutUs from "../../Component/HomeCoponent/AboutUs";
import AnimationProducts from "../../Component/HomeCoponent/AnimationProducts";
import BannerSlider from "../../Component/HomeCoponent/BannerSlider";
import DesignerArtistsPart from "../../Component/HomeCoponent/DesignerArtistsPart";
import GraphicProducts from "../../Component/HomeCoponent/GraphicProducts/GraphicProducts";
import OurAdvantages from "../../Component/HomeCoponent/OurAdvantages";
import OurContacts from "../../Component/HomeCoponent/OurContacts";
import OurProcess from "../../Component/HomeCoponent/OurProcess";
import OurSkills from "../../Component/HomeCoponent/OurSkills";
import Ourservices from "../../Component/HomeCoponent/Ourservices";
import PeopleAboutUs from "../../Component/HomeCoponent/PeopleAboutUs";
import ProductServices from "../../Component/HomeCoponent/ProductServices";
import Footer from "../../Component/Sheard/Footer";
import bg_image from '../../assets/Website/Website-background.jpg'


const HomePage = () => {
    return (
        <div className="bg-black  mx-auto" >
            <div className=" mx-auto bg-cover" style={{ backgroundImage: `url(${bg_image})` }}>
                {/* <Banner></Banner> */}
                <BannerSlider></BannerSlider>
                <ProductServices></ProductServices>
                <AnimationProducts></AnimationProducts>
                <GraphicProducts></GraphicProducts>
            </div>
            <DesignerArtistsPart></DesignerArtistsPart>
            <OurAdvantages></OurAdvantages>
            <AboutUs></AboutUs>
            <Ourservices></Ourservices>
            <OurProcess></OurProcess>
            <PeopleAboutUs></PeopleAboutUs>
            <OurSkills></OurSkills>
            <OurContacts></OurContacts>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;