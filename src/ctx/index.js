import React, { useState } from "react";
import Ctx from "./ctx";

function GlobalContext({ children }) {
  const [userData, setUserData] = useState({});
  const [careRecipientData, setCareRecipientData] = useState({});
  const [taskData, setTaskData] = useState([]);
  const [note, setNote] = useState([]);
  const [email, setEmail] = useState([]);

  return (
    <Ctx.Provider
      value={{
        userData,
        setUserData,
        careRecipientData,
        setCareRecipientData,
        taskData,
        setTaskData,
        note,
        setNote,
        email,
        setEmail,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export default GlobalContext;
