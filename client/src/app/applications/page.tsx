import { ApplicationContainer } from "../components/ApplicationContainer";
import { Footer } from "../components/Footer";
import SideNavBar from "../components/SideNavBar";

const page = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="flex gap-12 h-full">
        <SideNavBar />
        <div className="flex-1 flex flex-col px-4 sm:px-8 lg:mr-10 xl:mx-5 justify-between overflow-y-auto overflow-x-hidden mt-7">
          <ApplicationContainer />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default page;
