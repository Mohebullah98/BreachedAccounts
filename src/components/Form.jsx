import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form(props) {
  const Navigate = useNavigate();
  const url = "https://hackcheck.woventeams.com/api/v4/breachedaccount/";
  const [email, setEmail] = useState("");
  function handleChange(event) {
    const value = event.target.value;
    setEmail(value);
  }
  function signIn(email) {
    let breachedAccounts = [];
    axios
      .get(url + email)
      .then((res) => {
        breachedAccounts = res.data;
        console.log(breachedAccounts);
      })
      /* using.then again to show that we will wait for breachedAccounts array to be set from the api response, 
      then we will navigate to our info prop with BreachedAccounts.
      */
      .then(() =>
        Navigate("/info", {
          state: { accounts: breachedAccounts, email: email }
        })
      )
      .catch((err) => console.log(err));
  }
  //use username:test@example.com and password:pw
  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Username"
        onChange={handleChange}
        name="email"
        value={email}
      />
      <input type="password" placeholder="Password" />
      <button type="submit" onClick={() => signIn(email)}>
        Login
      </button>
    </form>
  );
}

export default Form;
