import SideNavBar from "../components/SideNavBar";

const page = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="ml-14 mr-6 my-2 flex gap-13.5 h-full">
        <SideNavBar/>
      </div>
    </div>
  );
};

export default page;
