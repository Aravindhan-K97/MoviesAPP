import { useState } from "react";
import Main from "./Main/Main";
import Sidebar from "./Sidebar/Sidebar";

const AdminDashboard = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <div
          className={`transition-all ease-in-out duration-300 bg-gray-800 text-white ${isSidebarVisible ? "w-64" : "w-0"} ${
            isSidebarVisible ? "block" : "hidden"
          } md:block fixed inset-y-0 left-0 z-50 overflow-y-auto`}
        >
          <Sidebar />
        </div>

        {/* Main Content */}
        <div
          className={`flex-grow transition-all ease-in-out duration-300 ml-0 ${
            isSidebarVisible ? "ml-64" : "ml-0"
          } md:ml-64 px-4 py-6`}
        >
          {/* Toggle Sidebar Button */}
          <button
            className="bg-teal-500 text-white p-2 rounded-md md:hidden mb-4"
            onClick={toggleSidebar}
          >
            {isSidebarVisible ? "Hide Sidebar" : "Show Sidebar"}
          </button>

          {/* Main Content */}
          <Main />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
