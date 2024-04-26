import { useState } from "react";

import "./form.scss";

function Form() {
  return (
    <div className="container">
      <form action="#">
        <div className="name">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            id="name"
            required
          />
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Enter your Email"
            name="email"
            id="email"
            required
          />
        </div>
        <div className="subject1">
          <label htmlFor="subject1">Subject</label>
          <input
            type="text"
            placeholder="Provide context"
            name="subject1"
            required
            id="subject1"
          />
        </div>
        <div className="subject2">
          <label htmlFor="subject2">Subject</label>
          <input
            type="text"
            placeholder="Select Subject"
            name="subject2"
            required
            id="subject2"
          />
        </div>
        <div className="message">
          <label htmlFor="messageBox">Message</label>
          <textarea
            name="message"
            id="messageBox"
            cols="30"
            rows="5"
            placeholder="Write your  question here"
            required
            ></textarea>
        </div>
        <button type="submit" id="submitBtn">
          Send Messege
        </button>
      </form>
    </div>
  );
}

export default Form;
