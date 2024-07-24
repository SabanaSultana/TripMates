import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_MAIL_SERVICE_ID,
        import.meta.env.VITE_MAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_MAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="background">
        <video
          src="https://cdn.pixabay.com/video/2020/01/25/31569-387675206_large.mp4"
          type="video/mp4"
          autoPlay
          loop
          muted
        />
      </div>
      <div className="location-details">Location Details</div>

      <div className="form-details">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
