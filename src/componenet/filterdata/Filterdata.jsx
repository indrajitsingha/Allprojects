import React from "react";
import "./style.css";
import { FaSearch } from "react-icons/fa";
import customers from "./data";
import { useState } from "react";
import { useEffect } from "react";

const Filterdata = () => {
  const [state, setstate] = useState("");
  const [data, setdata] = useState(customers);

  const submitform = (event) => {
    event.preventDefault();

    if (state) {
      const filtered = customers.filter((data) => data.name === state.trim());
      if (filtered.length > 0) {
        setdata(filtered);
      }
      if (filtered.length == 0) {
        setdata(0);
      }
    }
    // console.log(filtered);
  };

  const change = (e) => {
    setstate(e.target.value);
    if (e.target.value === "") {
      setdata(customers);
    }
  };

  useEffect(() => {}, [data]);

  return (
    <>
      <div className="">
        <div className="searchdata">
          <form action="" className="data-form" onSubmit={submitform}>
            <input
              type="text"
              placeholder="search any data"
              name="searchdata"
              value={state}
              onChange={change}
              list="Cars"
            />
            <button type="submit" className="search-data">
              <FaSearch />
            </button>
            <datalist id="Cars">
{
  data && data.map((x)=>{
    return(
      <option value={x.name}>{x.name}</option>
    )
  })
}  
    </datalist>
          </form>
        </div>
        <div className="table">
          <table className="maintable">
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>age</th>
                <th>address</th>
                <th>phone</th>
                <th>email</th>
              </tr>
            </thead>

            {/* {
                filtered==0? <h1>data not found</h1> : null
        
            } */}

            <tbody>
              {data == 0 ? (
                <h1>not found</h1>
              ) : (
                data.map((x) => {
                  return (
                    <tr className="childclass" key={x.id}>
                      <td>{x.id}</td>
                      <td>{x.name}</td>
                      <td>{x.age}</td>
                      <td>{x.address}</td>
                      <td>{x.phone}</td>
                      <td>{x.email}</td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Filterdata;
