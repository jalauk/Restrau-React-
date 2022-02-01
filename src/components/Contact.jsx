import React, { useState } from "react";

const Contact = () => {
  
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });
  let name, value;
  const Inputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const SendData = async (e) => {
    // e.preventDefault();
    console.log("clicked");
    const { name, email, message } = user;
    const res = await fetch("/feed", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("OOPS!!");
    } else {
      window.alert("thanks for your feedback!");
    }
  };

  return (
    <>
      <div className="mainDiv">
        <h1 className="head mt-3">Contact Us</h1>
      </div>
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 marg1 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="sm:w-2/4 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              class="absolute inset-0"
              style={
                ({
                  opacity: 0.4,
                },
                { grayscale: 1 },
                { contrast: 1.2 })
              }
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224368.39371911954!2d77.25804378668985!3d28.516983402226085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1635353329464!5m2!1sen!2sin"
              width="100%"
              height="100%"
              frameborder="0"
            ></iframe>
            <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div class="lg:w-1/2 px-3">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p class="mt-1">JSS ACADEMY OF TECHNICAL EDUCATION NOIDA </p>
              </div>
              <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a class="text-indigo-500 leading-relaxed">
                  rs182098@gmail.com
                </a>
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p class="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 md:w-1/3 bg-white flex flex-col md:ml-20 w-full md:py-8 mt-8 md:mt-0">
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={user.name}
                onChange={Inputs}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                placeholder
                onChange={Inputs}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={user.message}
                placeholder="Message"
                onChange={Inputs}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              class="text-white bg border-0 py-2 px-6 b1 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={SendData}
            >
              SUBMIT
            </button>
            <p class="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
