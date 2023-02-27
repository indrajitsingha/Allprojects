import React, { useEffect, useState } from "react";
import { FaUserAlt, FaLocationArrow } from "react-icons/fa";
import {
  AiFillMail,
  AiFillCalendar,
  AiTwotonePhone,
  AiFillLock,
} from "react-icons/ai";
import axios from "axios";

let datatype = "";
let dep = 0;
const User = () => {
  const [user, setuser] = useState();
  const [data, setdata] = useState();
  const newuser = () => {
    dep += 1;
    setdata(user[0].name.first + " " + user[0].name.last);
    datatype = "Name";
  };

  useEffect(() => {
    const getuserdata = async () => {
      const response = await axios.get("https://randomuser.me/api/");
      console.log(response.data.results);
      setuser(response.data.results);
    };
    getuserdata();
  }, [dep]);
  const userdata = () => {
    setdata(user[0].name.first + " " + user[0].name.last);
    datatype = "Name";
  };
  const mail = () => {
    setdata(user[0].email);
    datatype = "Email";
  };
  const dob = () => {
    setdata(user[0].dob.date.slice(0, 10));
    datatype = "date of birth";
  };
  const location = () => {
    setdata(user[0].location.city + " ," + user[0].location.country);
    datatype = "country and sate ";
  };
  const contact = () => {
    setdata(user[0].cell);
    datatype = "Phone NO ";
  };
  const pass = () => {
    setdata(user[0].login.password);
    datatype = "Password";
  };

  return (
    <>
      <div className="sm:text-[40px] text-[30px] w-[100%] text-center">
        RANDOM USER GENERATOR
      </div>
      <div className="main h-[90vh] w-[100%] flex flex-col justify-center items-center">
        {user
          ? user.map((x) => {
              return (
                <div
                  className="card h-[75vh] sm:w-[50%] w-[90%] bg-[crimson] flex flex-col justify-center items-center"
                  key={x.id.value}
                >
                  <div className="user-iamge h-[55%] w-[100%] flex justify-center items-center ">
                    <img
                      src={x.picture.large}
                      className="rounded-full h-[60%] object-contain border-4 border-white"
                      alt=""
                    />
                  </div>
                  <div className="user-content text-white h-[20%] w-[100%] flex flex-col justify-center items-center">
                    <div className="sb text-[18px] ">
                      Hi, My {!datatype ? "name" : datatype} is
                    </div>
                    <div className="content text-[30px] animate-bounce delay-150 ">
                      {!data ? x.name.first : data}
                    </div>
                  </div>
                  <div className="btncontent text-[30px] h-[15%] w-[100%] flex justify-around items-center">
                    <button
                      className="text-white hover:text-[#29CDB5] hover:border-[#29CDB5] hover:animate-bounce delay-100  rounded-full border-4 border-white p-2"
                      onMouseOver={userdata}
                      id="user"
                    >
                      <FaUserAlt />
                    </button>
                    <button
                      className="text-white hover:text-[black] hover:border-[black]  hover:animate-bounce delay-100  rounded-full border-4 border-white p-2"
                      onMouseOver={mail}
                    >
                      <AiFillMail />
                    </button>
                    <button
                      className="text-white hover:text-[#3CCF4E] hover:border-[#3CCF4E] hover:animate-bounce delay-100  rounded-full border-4 border-white p-2"
                      onMouseOver={dob}
                    >
                      <AiFillCalendar />
                    </button>
                    <button
                      className="text-white hover:text-[#810CA8] hover:border-[#810CA8]  hover:animate-bounce delay-100  rounded-full border-4 border-white p-2"
                      onMouseOver={location}
                    >
                      <FaLocationArrow />
                    </button>
                    <button
                      className="text-white hover:text-[#FFD700] hover:border-[#FFD700]  hover:animate-bounce delay-100  rounded-full border-4 border-white p-2"
                      onMouseOver={contact}
                    >
                      <AiTwotonePhone />
                    </button>
                    <button
                      className="text-white hover:text-[#6C5CE7] hover:border-[#6C5CE7]   hover:animate-bounce delay-100  rounded-full border-4 border-white p-2"
                      onMouseOver={pass}
                    >
                      <AiFillLock />
                    </button>
                  </div>
                  <div className="text-[25px] h-[10%] w-[100%] flex justify-around items-center">
                    <button
                      className="bg-black text-white pl-3 p-1 pr-3 rounded hover:bg-[#3CCF4E] "
                      onClick={newuser}
                    >
                      Getuser
                    </button>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default User;
