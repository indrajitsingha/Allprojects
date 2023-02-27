import React from "react";
import { createContext, useState } from "react";
import { app } from "./firebase/Firebaseconfig";
import {
  addDoc,
  collection,
  getFirestore,
  doc,
  getDocs,
  deleteDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

const db = getFirestore(app);

const ContextData = createContext();

const Contextfile = ({ children }) => {
  const [fechupdate, setfechupdate] = useState(null);
  const [UpdateID, setUpdateID] = useState();

  const CreateData = async (Fullname, Email, Subject, StudyField) => {
    await addDoc(collection(db, "usersDetails"), {
      Fullname: Fullname,
      Email: Email,
      Subject: Subject,
      StudyField: StudyField,
    });
  };

  const ReadData = async () => {
    return await getDocs(collection(db, "usersDetails"));
  };
  const deleteData = async (id) => {
    await deleteDoc(doc(db, "usersDetails", id));
  };

  const featchforUpdate = async (id) => {
    setUpdateID(id);
    const docRef = doc(db, "usersDetails", id);
    const docSnap = await getDoc(docRef);

    setfechupdate(docSnap.data());
  };

  const updateData = async (Fullname, Email, Subject, StudyField) => {
    const userRef = doc(db, "usersDetails", UpdateID);
    await updateDoc(userRef, {
      Fullname: Fullname,
      Email: Email,
      Subject: Subject,
      StudyField: StudyField,
    });
  };

  return (
    <ContextData.Provider
      value={{
        CreateData,
        ReadData,
        deleteData,
        featchforUpdate,
        fechupdate,
        updateData,
        setfechupdate,
      }}
    >
      {children}
    </ContextData.Provider>
  );
};

export default Contextfile;
export { ContextData };
