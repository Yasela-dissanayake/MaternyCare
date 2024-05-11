import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { Rings } from "react-loader-spinner";
import PrimaryButton from "../components/PrimaryButton";

const Notices = () => {
  const BASE_URL = "http://localhost:5000/";
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(false);
  const colors = ["#BA97FE", "#0D99FF", "#F580AB", "#F1CB3A", "#3AF16C"];

  useEffect(() => {
    const getNotices = () => {
      setLoading(true);
      const axiosConfig = {
        method: "get",
        url: `${BASE_URL}notices`,
        headers: {
          Authorization: `Bearer`,
        },
      };
      axios(axiosConfig)
        .then((response) => {
          console.log(response.data.data);
          setNotices(response.data.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    getNotices();
  }, []);

  return (
    <div className="mx-11 my ">
      <div className="flex justify-between ml-4 mt-7">
        <p>
          Pages <span> / Notices</span>
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
      <div className="flex justify-between my-4 items-center ">
        <h1 className="mt-9 mb-4">Notices</h1>
        <div className="flex justify-end">
          <button className="bg-[#CAE9FF] py-2 px-4 rounded-lg text-[#0D99FF] hover:bg-[#0D99FF] hover:text-white hover:animate-fadeIn active:bg-[#CAE9FF] active:text-[#0D99FF]">
            Add Notice
          </button>
        </div>
      </div>
      <div className="columns-1 sm:columns-2 gap-10">
        {loading ? (
          <Rings
            visible={true}
            height="80"
            width="80"
            color="#BA97FE"
            ariaLabel="rings-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        ) : (
          notices.map(
            (
              notice: { title: string; message: string; created_at: string },
              index: number
            ) => {
              const date = new Date(notice.created_at);
              const formattedDate = `${date.getFullYear()}-${String(
                date.getMonth() + 1
              ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

              return (
                <div
                  className="px-8 py-5 text-white rounded-2xl mb-8 animate-fadeIn shadow-md"
                  style={{ backgroundColor: colors[index % colors.length] }}
                >
                  <h1 className="mb-2 font-medium text-xl">{notice.title}</h1>
                  <p className="font-normal text-sm">{notice.message}</p>
                  <p className="text-xs mt-3">Posted on: {formattedDate}</p>
                </div>
              );
            }
          )
        )}
      </div>
    </div>
  );
};

export default Notices;
