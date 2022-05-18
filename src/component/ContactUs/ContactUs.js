import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./ContactUs.css";

const ContactUs = () => {
  const [userMessage, setUserMessage] = useState();
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_paq2ewc",
        "template_4ea5oiw",
        e.target,
        "teULhFCCp3oB5c_Gl"
      )
      .then(
        (result) => {
          if (result) {
            setUserMessage("We Receive your Message!");
            setTimeout(() => {
              setUserMessage("");
            }, 3000);
          }
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <section className="container my-5">
      <h3 className="text-center">Contact With US</h3>
      <h4 className="text-center">{userMessage}</h4>
      <form class="row g-3" ref={form} onSubmit={sendEmail}>
        <div class="col-md-12">
          <label for="inputName" class="form-label">
            Name
          </label>
          <input type="text" class="form-control" id="inputName" name="name" />
        </div>
        <div class="col-md-12">
          <label for="inputEmail4" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="inputEmail4"
            name="email"
          />
        </div>
        <div class="col-12">
          <label for="phone" class="form-label">
            Phone Number
          </label>
          <input
            type="number"
            class="form-control"
            id="phone"
            placeholder="+880 1681894386"
            name="phone"
          />
        </div>
        <div class="col-12">
          <label for="inputMessage" class="form-label">
            Message
          </label>
          <input
            type="text"
            class="form-control"
            id="inputMessage"
            placeholder="I need a product......"
            name="message"
          />
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
