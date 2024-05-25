import Footer from "../components/Footer/Footer.tsx";
import Header from "../components/Header/Header.tsx";
import Hero from "../components/Home/Hero.tsx";
import Inquiry from "../components/Home/Inquiry.tsx";
import Items from "../components/Home/Items.tsx";
import Recommended from "../components/Home/Recommend.tsx";
import Region from "../components/Home/Region.tsx";
import Sales from "../components/Home/Sales.tsx";
import Services from "../components/Home/Services.tsx";
import Subscribe from "../components/Home/Subscribe.tsx";
const Home = () => (
  <>
    <Header />
    <Hero />
    <Sales />
    <Items />
    <Inquiry />
    <Recommended />
    <Services />
    <Region />
    <Subscribe />
    <Footer />
  </>
);

export default Home;
