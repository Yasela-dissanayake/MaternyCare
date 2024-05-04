import React from "react";

const DashboardStatCard = ({
  image,
  color,
}: {
  image: string;
  color: string;
}) => {
  return (
    <div className="bg-white py-12 px-8 h-42 rounded-lg">
      <div className="grid grid-cols-3 ">
        <div className={` xl:col-span-1 rounded-full ${color} w-16 h-16  p-6`}>
          <img src={image} />
        </div>
        <div className=" col-span-3 xl:col-span-2 text-start lg:text-center  xl:pl-10 2xl:pl-5 pl-0">
          <div>
            <span className="text-2xl font-medium">5</span>{" "}
            <span className="font-thin">kicks</span>
          </div>
          <div>
            <h3>Kick count</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStatCard;
