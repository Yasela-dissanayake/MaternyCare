import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../assets/logo.png";

const Dashboard = () => {
  return (
    <div className="w-3/5 mx-11 my">
      <div className="flex justify-between ml-4 mt-7">
        <p>
          Pages <span> / Dashboard</span>
        </p>

        <div className="flex items-center w-1/3 relative">
          <SearchIcon className="absolute left-3 " />
          <input
            className="border-2 border-gray-300 bg-white h-10 pl-10 pr-16 rounded-lg text-sm focus:outline-none "
            type="search"
            name="search"
            placeholder="Search any keywords"
          />
        </div>
      </div>
      <h1 className="mt-9 mb-4">Dashboard Overview</h1>
      <div className="h-44 px-8 py-5 text-white bg-[#F580AB] rounded-2xl mb-8">
        <h1 className="mb-2">
          Hello, <span className="font-semibold">Ushani,</span>
        </h1>
        <p>
          Have a nice day and don’t forget to take care of <br />
          your health!
        </p>
        <h5 className="mt-3">Learn More </h5>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="bg-red-100 pt-9 pl-7 h-36 rounded-lg grid grid-cols-2">
          <img src={logo} alt="" />
          <div>
            <h1>5 kicks</h1>
            <h1>Kick count</h1>
          </div>
        </div>
        <div className="bg-red-100 pt-9 pl-7 h-36 rounded-lg">a</div>
        <div className="bg-red-100 pt-9 pl-7 h-36 rounded-lg">a</div>
      </div>
    </div>
  );
};

export default Dashboard;
