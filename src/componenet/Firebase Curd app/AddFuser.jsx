import React from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContextData } from "./Contextfile";
import "./curdapp.css";

const AddFuser = () => {
  const navigate = useNavigate();
  const { CreateData } = useContext(ContextData);

  const [Details, setDetails] = useState({
    Fullname: "",
    Email: "",
    Subject: "",
    StudyField: " ",
  });
  const submitform = (e) => {
    e.preventDefault();
    console.log(Details);
    CreateData(
      Details.Fullname,
      Details.Email,
      Details.Subject,
      Details.StudyField
    );
    navigate("/Firebasecurd");
  };
  const handlechange = (event) => {
    setDetails((olddata) => {
      return { ...olddata, [event.target.name]: event.target.value };
    });
  };

  return (
    <>
      <div className="w-full bg-grey-500 mainbody">
        <div className="container mx-auto py-8">
          <div className="w-96 mx-auto bg-white rounded shadow">
            <div className="mx-16 py-4 px-8 text-black text-xl font-bold border-b border-grey-500">
              Student Application
            </div>

            <form
              name="student_application"
              id="student_application"
              onSubmit={submitform}
              action=""
            >
              <div className="py-4 px-8">
                <div className="mb-4">
                  <span className="block text-balck text-sm font-bold mb-2">
                    Name:
                  </span>
                  <input
                    className=" border rounded w-full py-2 px-3 text-grey-darker"
                    type="text"
                    name="Fullname"
                    value={Details.Fullname}
                    onChange={handlechange}
                    placeholder="Enter Your  Name"
                  />
                </div>

                <div className="mb-4">
                  <span className="block text-balck text-sm font-bold mb-2">
                    Email:
                  </span>
                  <input
                    className=" border rounded w-full py-2 px-3 text-grey-darker"
                    type="text"
                    name="Email"
                    id="Email"
                    value={Details.Email}
                    onChange={handlechange}
                    placeholder="Enter Your Email"
                  />
                </div>

                <div className="mb-4">
                  <span className="block text-balck text-sm font-bold mb-2">
                    Subject:
                  </span>
                  <input
                    className=" border rounded w-full py-2 px-3 text-grey-darker"
                    type="text"
                    name="Subject"
                    value={Details.Subject}
                    onChange={handlechange}
                    placeholder="Enter Your  Subject Name"
                  />
                </div>

                <div className="mb-4">
                  <span className="block text-balck text-sm font-bold mb-2">
                    Study Field:
                  </span>
                  <input
                    className=" border rounded w-full py-2 px-3 text-grey-darker"
                    type="text"
                    name="StudyField"
                    placeholder="Enter Your Study Field"
                    value={Details.StudyField}
                    onChange={handlechange}
                  />
                </div>

                <div className="mb-4">
                  <button className="mb-2 mx-10 rounded-full py-1 px-24 bg-gradient-to-r from-green-400 to-blue-500 ">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFuser;
