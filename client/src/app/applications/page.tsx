import { ApplicationContainer } from "../components/ApplicationContainer";
import { Footer } from "../components/Footer";
import { MobileNavBar } from "../components/MobileNavBar";
import SideNavBar from "../components/SideNavBar";

const page = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="flex xl:gap-10 gap-8 h-full">
        <SideNavBar />
        <div className="flex-1 flex flex-col px-4 sm:px-8 xl:mr-10 xl:mx-5 justify-between overflow-y-auto overflow-x-hidden mt-7">
          <MobileNavBar />
          <ApplicationContainer />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default page;
