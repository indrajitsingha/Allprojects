import React from "react";
import { useState } from "react";
import "./curd.css";
import { ShowUser } from "./api/Api";
import { useEffect } from "react";

const Showuser = () => {
  const [showUser, setshowUser] = useState([]);

  const getalluser = async () => {
    const response = await ShowUser();
    setshowUser(response.data);
  };
  useEffect(() => {
    getalluser();
  }, []);

  return (
    <>
      <table className="border-collapse w-full">
        <thead>
          <tr>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Fullname
            </th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Email
            </th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Subject
            </th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {showUser.map((x, id) => {
            return (
              <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                  {x.name}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b  block lg:table-cell relative lg:static">
                  {x.email}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b  block lg:table-cell relative lg:static">
                  {x.subject}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                  <a href="#" className=" rounded bg-green-400   p-2 m-1">
                    Edit
                  </a>
                  <a href="#" className=" rounded bg-red-400   p-2 m-1">
                    Remove
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Showuser;
// {  tableData.length>0  &&
//   tableData.map((x ,id)=>{return (
// <tr classNameName='Table_tr_Curd' key={x.id}>
//         <td classNameName='Table_th_td'>{id+1}</td>
//         <td classNameName='Table_th_td'>{x.name}</td>
//         <td classNameName='Table_th_td'>{x.email}</td>
//         <td classNameName='Table_th_td'>{x.subject}</td>
//     </tr>
//   )})
// }
