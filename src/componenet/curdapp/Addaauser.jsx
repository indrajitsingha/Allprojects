import React, { useState } from "react";
import "./curd.css";
import { adduser } from "./api/Api";

const Addaauser = () => {
  const [Data, setData] = useState({
    name: "",
    email: " ",
    subject: "",
  });

  const adduserdetalis = async () => {
    await adduser(Data);
  };

  const handelChange = (event) => {
    setData((olddata) => {
      return { ...olddata, [event.target.name]: event.target.value };
    });
  };
  const formsubmit = (event) => {
    event.preventDefault();
    console.log(Data);
    adduserdetalis();
  };
  return (
    <div>
      <div className="main CurdHOme">
        <div className="sub_a">
          <form onSubmit={formsubmit}>
            <label>Full Name</label>
            <input
              type="text"
              className="cardInput"
              name="name"
              placeholder="Your name.."
              value={Data.name}
              onChange={handelChange}
            />

            <label>Email</label>
            <input
              type="email"
              className="cardInput"
              name="email"
              placeholder="Your email.."
              value={Data.email}
              onChange={handelChange}
            />

            <label>Subject</label>
            <input
              type="text"
              className="cardInput"
              name="subject"
              placeholder="Your Subject.."
              value={Data.subject}
              onChange={handelChange}
            />

            <button type="submit" className="CardBtn">
              Submit
            </button>
          </form>
        </div>

        <div className="sub_b">
          <img
            className="curdImg"
            src="https://ey5me.csb.app/happy.svg"
            width="100%"
            height="100%"
            alt="backimg"
          />
        </div>
      </div>
    </div>
  );
};

export default Addaauser;
