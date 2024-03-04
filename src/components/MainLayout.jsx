import { Navbar } from "@material-tailwind/react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar
        variant="gradient"
        color="blue-gray"
        className="from-blue-gray-900 to-blue-gray-800 sticky top-0 z-10 h-max max-w-full rounded-none  px-4 py-3 md:px-0"
      >
        <div className="container mx-auto flex items-center justify-between text-3xl text-white">
          <div>
            <span className="font-bold">GitHub </span>
            <span>Jobs</span>
          </div>
        </div>
      </Navbar>
      <div className="container mx-auto px-4 py-8 md:px-0">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
