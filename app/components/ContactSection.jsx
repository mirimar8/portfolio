"use client";
import React, { useState } from "react";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    console.log(data);

   const response = await fetch ("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
   })

   if (response.ok) {
    console.log("Message sent successfully");
    setStatus('success');
    setLoading(false);
    
    //reset the form
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.message.value = "";

   } 
   if (!response.ok) {
    console.log("Error sending message");
    setLoading(false);
    setStatus('error');
   }
  }

  return (
    <section id="contact" className="text-white mb-20 scroll-mt-32">
      <h1
        className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC2424] to-[#4A569D]
             font-extrabold text-4xl sm:text-5xl lg:text-6xl py-4 text-center"
      >
        Contact Me
      </h1>
      <p className="text-center">
        Have a question, want to work together or just say hi?
        <br></br>Let&apos;s connect! <br></br>Leave a message here and I&apos;ll get back
        to you as soon as possible.{" "}
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col my-4 mx-auto max-w-2xl px-4">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="text-white block mb-2 text-sm font-medium"
          >
            Name
          </label>
          <input
            type="text"
            autoComplete="off"
            id="name"
            minLength={3}
            maxLength={150}
            required
            className="bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="text-white block mb-2 text-sm font-medium"
          >
            Email
          </label>
          <input
            type="email"
            autoComplete="off"
            id="email"
            minLength={3}
            maxLength={150}
            required
            className="bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          ></input>
        </div>
        <div>
          <label
            htmlFor="message"
            className="text-white block text-sm mb-2 font-medium"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            minLength={10}
            maxLength={500}
            required
            className="mb-9 bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="px-12 py-3 rounded-lg  
              disabled:bg-gray-400 disabled:text-gray-100 bg-gradient-to-r 
              from-[#DC2424] to-[#4A569D] text-white font-semibold text-center transition 
              duration-300 hover:from-[#bf1313] hover:to-[#2d3a81] ease self-center"
        >
          Send Message
        </button>
      </form>
      {status === 'success' && <p className="py-6 border-[#D6E1CC] border-2 bg-[#DCECD3] 
      rounded-md text-center text-[#386A38] w-1/2 mx-auto mt-10">
        <span className="font-bold">Thank You!</span> Your message has been sent successfully!</p>}
      {status === 'error' && <p className="py-6 border-[#E1CCCC] border-2 bg-[#ECD3D3] 
      rounded-md text-center text-[#BE0000] w-1/2 mx-auto mt-10">
        There was an error sending your message.</p>}
    </section>
  );
};

export default ContactSection;
