import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../assets/images/logo.png";

const Dashboard = () => {
  return (
    <div className="w-3/5 mx-11 my">
      <div className="flex justify-between ml-4 mt-7">
        <p>
          Pages <span> / Dashboard</span>
        </p>

        <div className="flex items-center w-1/3 relative">

    <div className="mx-11 my ">
      <div className="flex justify-between ml-4 mt-7">
        <p className="hidden lg:block">
          Pages <span> / Dashboard</span>
        </p>

        <div className="lg:flex items-center relative hidden ">

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
          <div>
            <img src={logo} alt="" className="h-12" />
          </div>
          <div>
            <h1>5 kicks</h1>
            <h1>Kick count</h1>
          </div>
        </div>
        <div className="bg-red-100 pt-9 pl-7 h-36 rounded-lg">a</div>
        <div className="bg-red-100 pt-9 pl-7 h-36 rounded-lg">a</div>
      </div>

      <h1 className="mt-9 mb-4 hidden lg:block">Dashboard Overview</h1>
      <h1 className="text-center text-3xl text-[#0D99FF] lg:hidden">
        Dashboard
      </h1>
      <div className="mt-14 lg:mt-0 h-44 px-8 py-5 text-white bg-[#BA97FE] rounded-2xl mb-8">
        <h1 className="mb-2">
          Hello <span className="font-semibold">Ushani,</span>
        </h1>
        <p>
          Every new life brings endless possibilities. Embrace the journey with
          love and joy.{" "}
        </p>
        {/* <h5 className="mt-3">Learn More </h5> */}
      </div>
      <div className="grid  sm:grid-cols-3 grid-cols-2 gap-8">
        <DashboardStatCard image={feet} color="bg-[#F9B8D0]" />
        <DashboardStatCard image={fire} color="bg-[#A8F0DB]" />
        <DashboardStatCard image={water} color="bg-[#80CAFF]" />
      </div>

      <LineChart />
    </div>
  );
};

export default Dashboard;
