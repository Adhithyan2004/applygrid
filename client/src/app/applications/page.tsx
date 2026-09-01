import { ApplicationContainer } from "../components/ApplicationContainer";
import { Footer } from "../components/Footer";
import SideNavBar from "../components/SideNavBar";

const page = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="flex gap-12 h-full">
        <SideNavBar />
        <div className="flex-1 flex flex-col px-2 mr-10 justify-between overflow-y-auto overflow-x-hidden mt-7">
          <ApplicationContainer />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default page;
