import { ApplicationContainer } from "../components/ApplicationContainer";
import { Footer } from "../components/Footer";
import SideNavBar from "../components/SideNavBar";

const page = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="ml-14 mr-10 my-2 flex gap-13.5 h-full">
        <SideNavBar />
        <div className="flex-1 flex flex-col pr-3 justify-between overflow-y-auto overflow-x-hidden mt-12">
          <ApplicationContainer />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default page;
