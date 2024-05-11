import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

const Notices = () => {
  const BASE_URL = "http://localhost:5000/";
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(false);
  const colors = ["#BA97FE", "#A3D8F1", "#F1A3BC", "#F1CB3A", "#3AF16C"];

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
      <h1 className="mt-9 mb-4">Notices</h1>
      <div className="columns-2 gap-4">
        {notices.map(
          (
            notice: { title: string; message: string; created_at: string },
            index: number
          ) => (
            <div
              className="px-8 py-5 text-white rounded-2xl mb-8"
              style={{ backgroundColor: colors[index % colors.length] }}
            >
              <h1 className="mb-2">{notice.title}</h1>
              <p>{notice.message}</p>
              <p>{notice.created_at}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Notices;
