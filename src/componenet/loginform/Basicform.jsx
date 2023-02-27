import React from "react";
import { useState } from "react";
import "./login.css";

const Basicform = () => {
  const [data, setdata] = useState({});
  // const Alldata=(event)=>{
  //   let d=event.target.value;

  //       const name =event.target.name;
  //       const value=event.target.value;
  //       setdata((x)=>({
  //           ...x,[name]:value

  // }))

  // }
  const Alldata = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setdata((oldvalue) => {
      console.log(oldvalue);
      if (name == "inputusername") {
        return {
          Username: value,
          Password: oldvalue.Password,
        };
      } else if (name == "inputpassword") {
        return {
          Username: oldvalue.Username,
          Password: value,
        };
      }
    });
  };

  const submitform = (event) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <div className="maindiv">
      <div className="loginform">
        <form className="loginform" action="" onSubmit={submitform}>
          <label htmlFor="">Username</label>
          <input
            className="logininput"
            type="text"
            name="inputusername"
            value={data.username}
            onChange={Alldata}
          />

          <label htmlFor="">Password</label>
          <input
            className="logininput"
            type="password"
            name="inputpassword"
            value={data.Password}
            onChange={Alldata}
          />

          <input type="submit" className="button" />
          <div className="show">
            Username: {data.Username} Password:{data.Password}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Basicform;
