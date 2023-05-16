import Featured from "../../components/featured/featured";
import FeaturedProperties from "../../components/featuredproprities/featuredproprities";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import MailList from "../../components/maillist/maillist";
import Navbar from "../../components/navbar/navbar";
import PropertyList from "../../components/propretylist/propretylist";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;