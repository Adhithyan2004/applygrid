import BentoHome from "./components/BentoHome";
import { Footer } from "./components/Footer";
import SideNavBar from "./components/SideNavBar";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden">
      <div className="ml-10 mr-3 my-2 flex gap-10.5 h-full">
        <SideNavBar />
        <div className="flex-1 px-10 overflow-y-auto">
          <BentoHome />
          <Footer />
        </div>
      </div>
    </div>
  );
}
