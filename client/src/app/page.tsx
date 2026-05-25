import BentoHome from "./components/BentoHome";
import { Footer } from "./components/Footer";
import SideNavBar from "./components/SideNavBar";

export default function Home() {
  return (
    <div className="h-screen overflow-hidden">
      <div className="mx-16 my-2 flex gap-13.5 h-full">
        <SideNavBar />
        <div className="flex-1 overflow-y-auto">
          <BentoHome />
          <Footer />
        </div>
      </div>
    </div>
  );
}
