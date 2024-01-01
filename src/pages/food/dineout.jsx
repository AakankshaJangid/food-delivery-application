import Carousal from "../../components/delivery/carousal";
import Places from "../../components/delivery/places";
import Brandcarousal from "../../components/delivery/brand-carousal";
import Heading from "../../components/delivery/heading";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
const Dineout = () => {
  return (
    
    <div className="flex flex-col bg-orange-100">
      <Navbar />
      <div className="text-center flex flex-col gap-4">
      <Heading />
      <div>
        <h1 className="text-5xl font-semibold text-orange-600">Dineout</h1>

        <p className="text-2xl text-black">
          Collections Explore curated lists of top restaurants, cafes, pubs, and
          bars in Indore, based on trends
        </p>
      </div>
      <Carousal />
      <Brandcarousal />
      <Places />
    </div>
    <Footer />
    </div>
  );
};

export default Dineout;
