import React from "react";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ContextData } from "./Contextfile";

const ShowFuser = () => {
  const Navigate = useNavigate();
  const {
    ReadData,
    deleteData,
    featchforUpdate,
    fechupdate,
    updateData,
    setfechupdate,
  } = useContext(ContextData);
  const [state, setstate] = useState([]);
  const [Modal, setModal] = useState(false);
  const [DeleteID, setDeleteID] = useState("");

  useEffect(() => {
    ReadData().then((details) => {
      setstate(details.docs);
    });
  }, [fechupdate, Modal]);

  const UpdateDeatils = () => {
    updateData(
      fechupdate.Fullname,
      fechupdate.Email,
      fechupdate.Subject,
      fechupdate.StudyField
    );
    setfechupdate(null);
  };
  const handlechange = (event) => {
    setfechupdate((olddata) => {
      return { ...olddata, [event.target.name]: event.target.value };
    });
  };

  const DeleteId = (id) => {
    setDeleteID(id);
    setModal(true);
  };

  const DeleteUser = () => {
    deleteData(DeleteID);
    setModal(false);
    setDeleteID("");
  };
  const CancleDelte = () => {
    setModal(false);
    setDeleteID("");
  };

  return (
    <div>
      <table className="border-collapse w-full">
        <thead>
          <tr>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell ">
              <h1 className="animate-bounce">Fullname</h1>
            </th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              <h1 className="animate-bounce"> Email</h1>
            </th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              <h1 className="animate-bounce"> Subject</h1>
            </th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              <h1 className="animate-bounce"> Field</h1>
            </th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              <h1 className="animate-bounce">Actions</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {fechupdate ? (
            <tr className=" bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <input
                  type="text"
                  className="w-full h-[5vh] rounded outline-none"
                  name="Fullname"
                  value={fechupdate.Fullname}
                  onChange={handlechange}
                />
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b  block lg:table-cell relative lg:static">
                <input
                  type="text"
                  className="w-full h-[5vh] rounded outline-none"
                  name="Email"
                  value={fechupdate.Email}
                  onChange={handlechange}
                />
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b  block lg:table-cell relative lg:static">
                <input
                  type="text"
                  className="w-full h-[5vh] rounded outline-none"
                  name="Subject"
                  value={fechupdate.Subject}
                  onChange={handlechange}
                />
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b  block lg:table-cell relative lg:static">
                <input
                  type="text"
                  className="w-full h-[5vh] rounded outline-none"
                  name="StudyField"
                  value={fechupdate.StudyField}
                  onChange={handlechange}
                />
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <button
                  href="#"
                  className=" rounded text-white bg-green-400 p-2 m-1"
                  onClick={UpdateDeatils}
                >
                  Update Data
                </button>
              </td>
            </tr>
          ) : (
            ""
          )}

          {Modal === true ? (
            <div class="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
              <div class="bg-white px-16 py-14 rounded-md text-center">
                <h1 class="text-xl mb-4 font-bold text-slate-500">
                  Do you Want Delete
                </h1>
                <button
                  class="bg-red-500 px-4 py-2 rounded-md text-md text-white"
                  onClick={CancleDelte}
                >
                  Cancel
                </button>
                <button
                  class="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
                  onClick={DeleteUser}
                >
                  Ok
                </button>
              </div>
            </div>
          ) : (
            ""
          )}

          {state.map((x) => {
            return (
              <tr
                className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
                key={x.id}
              >
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                  {x.data().Fullname}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b  block lg:table-cell relative lg:static">
                  {x.data().Email}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b  block lg:table-cell relative lg:static">
                  {x.data().Subject}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b  block lg:table-cell relative lg:static">
                  {x.data().StudyField}
                </td>
                <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                  <button
                    href="#"
                    className=" rounded text-white bg-green-400   p-2 m-1"
                    onClick={() => featchforUpdate(x.id)}
                  >
                    Edit
                  </button>
                  <button
                    href="#"
                    className=" rounded text-white bg-red-400   p-2 m-1"
                    onClick={() => DeleteId(x.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowFuser;

// {
//   showUser.map((x,id)=>{
//     return(

//       <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">

//           <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
//           {x.name}
//           </td>
//           <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b  block lg:table-cell relative lg:static">
//              {x.email}
//           </td>
//           <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b  block lg:table-cell relative lg:static">
//              {x.subject}
//           </td>
//           <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
//               <a href="#" className=" rounded bg-green-400   p-2 m-1">Edit</a>
//               <a href="#" className=" rounded bg-red-400   p-2 m-1">Remove</a>
//           </td>
//       </tr>
//       )
//   })
// }
