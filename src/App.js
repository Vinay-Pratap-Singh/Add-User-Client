import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [userName, setUserName] = useState("");
  const username = (event) => {
    event.preventDefault();
    setUserName(event.target.value);
  };

  const addMyUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/", { name: userName });
      console.log(res);
    } catch (error) {
      console.log("Unable to add the data\n", error);
    }
  };
  return (
    <form method="POST" onSubmit={addMyUser}>
      <input
        type={"text"}
        placeholder="Enter Your Name"
        onChange={username}
        value={userName}
      ></input>
      <button type="submit">Add User</button>
    </form>
  );
};

export default App;
