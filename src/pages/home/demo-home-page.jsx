import Food from "./food";
import Hero from "./herosection";
import Navbar from "./navbar";

function DemoHomePage() {
  return (
    <div className="h-screen overflow-x-hidden overflow-y-auto">
      <div className="sticky top-2">
        <Navbar />
      </div>
      <Hero />
      <Food />
    </div>
  );
}
export default DemoHomePage;
