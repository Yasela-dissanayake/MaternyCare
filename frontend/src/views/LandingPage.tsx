import PrimaryButton from "../components/PrimaryButton";
import { useEffect, useState } from "react";
import axios from "axios";

interface Notice {
  id: string;
  title: string;
  sub_title: string;
  message: string;
}

const LandingPage = () => {
  const [notices, setNotices] = useState<Notice[]>([]);

  useEffect(() => {
    const getNotices = async () => {
      const axiosConfig = {
        method: "get",
        url: `http://192.168.1.5:5000/notices`,
        headers: {
          Authorization: `Bearer`,
        },
      };
      try {
        const response = await axios(axiosConfig);
        setNotices(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    getNotices();
  }, []);

  return (
    <div className="text-center">
      <PrimaryButton label="Login" onClick={() => {}} />
      <div className="p-2" />
      <PrimaryButton label="Registration" onClick={() => {}} />
      <div className="p-2" />
      <PrimaryButton label="Login" onClick={() => {}} />

      {notices.map((notice: Notice) => (
        <div key={notice.id}>
          <h2>{notice.title}</h2>
          <h2>{notice.sub_title}</h2>
          <h2>{notice.message}</h2>
        </div>
      ))}
    </div>
  );
};

export default LandingPage;
