import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Webmail = () => {
  const [userMessage, setUserMessage] = useState();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // account from wdpf1252386@gmail.com
    // send to bd.support@uniconbd.com - webmail
    emailjs
      .sendForm(
        "service_q4aan05",
        "template_motna7q",
        form.current,
        "mT_fvcHDbofTb-LEV"
      )
      .then(
        (result) => {
          if (result) {
            setUserMessage("We Receive your Message!");
            setTimeout(() => {
              setUserMessage("");
            }, 5000);
          }
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <form ref={form} onSubmit={sendEmail} className="container">
      <label>Name</label>
      <input type="text" name="user_name" /> <br />
      <label>Email</label>
      <input type="email" name="user_email" /> <br />
      <label>Message</label>
      <textarea name="message" /> <br />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Webmail;
