import React from "react";
import Navbar from "../Component/Navbar";

function Contact(props) {
  return (
    <>
    {/* <Navbar /> */}
      <div className="contact page">
        <h3>Contact Page</h3>
        <form>
          <input type="text" placeholder="Name" />
          <input type="tel" placeholder="Phone" />
          <textarea placeholder="Message" rows="3"></textarea>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
