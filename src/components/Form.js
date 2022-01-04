import React from "react";
import { MdAccountCircle, MdEmail, MdLock } from "react-icons/md";
function Form() {
  return (
    <form action="">
      <div className="input-wrapper">
        <MdAccountCircle className="icon" />{" "}
        <input type="text" placeholder="Name" />
      </div>
      <div className="input-wrapper">
        <MdEmail className="icon" />
        <input type="email" placeholder="E-mail" />
      </div>
      <div className="input-wrapper">
        <MdLock className="icon" />
        <input type="pasword" placeholder="Password" />
      </div>
      <div>
        <input type="checkbox" checked />
        <span className="terms">
          I read and agree to{" "}
          <a href="#" className="link">
            Terms & Conditions
          </a>
        </span>
      </div>
    </form>
  );
}

export default Form;
