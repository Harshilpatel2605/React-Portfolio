import React from "react";
import "../Styles/contact.css";
import facebook from "../Assets/facebook-icon.png";
import twitter from "../Assets/twitter.png";
import youtube from "../Assets/youtube.png";
import instagram from "../Assets/instagram.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2fn2l19",
        "template_xs06cwl",
        form.current,
        "9_1LLYK9FgShkFEuB"
      )
      .then(
        () => {
            console.log("SUCCESS!");
            document.getElementById("btn").disabled = true;
          alert("Email Sent !");
          e.target.reset();
          document.getElementById("btn").disabled = false;
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contact">
      <div className="contact-me">Contact me</div>
      <div className="content">
        Please fill out the form below to discuss any work opportunities.
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="contact-name"
          placeholder="Your Name"
          name="from_name"
        />
        <input
          type="email"
          className="contact-email"
          placeholder="Your Email"
          name="from_email"
        />
        <textarea
          className="contact-message"
          name="message"
          rows="5"
          placeholder="Your Message"
        />
        <button
          id="btn"
          type="submit"
          className="submit-btn"
          value="send"
        >
          Submit
        </button>
      </form>

      <div className="links">
        <img src={facebook} alt="Facebook-icon" />
        <img src={twitter} alt="Twitter-icon" />
        <img src={youtube} alt="Youtube-icon" />
        <img src={instagram} alt="Instagram-icon" />
      </div>
    </div>
  );
}

export default Contact;
