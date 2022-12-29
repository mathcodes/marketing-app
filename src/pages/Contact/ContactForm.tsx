import React from "react";

function ContactForm() {

  const onClick = () => {
    console.log("clicked");
    // let Fname = document.getElementById("firstname") as HTMLInputElement;
    // let Lname = document.getElementById("lastname") as HTMLInputElement;
    // let email = document.getElementById("email") as HTMLInputElement;
    // let phoneNum = document.getElementById("phoneNum") as HTMLInputElement;
    // let message = document.getElementById("message") as HTMLInputElement;
    // console.log(Fname.value);
    // console.log(Lname.value);
    // console.log(email.value);
    // console.log(message.value);

    // let data = {
    //   firstName: Fname.value,
    //   lastName: Lname.value,
    //   email: email.value,
    //   phoneNum: phoneNum.value,
    //   message: message.value,
    // };
    // console.log(data);
  };

  return (
    <div>
      <form className="flex flex-col space-y-10">
        <h1 className="text-4xl font-semibold text-primary mb-5">
          Send a Message
        </h1>

        <div className="flex space-x-10 lg:flex-col lg:space-y-10 lg:space-x-0">
          <input
            id="firstname"
            name="firstname"
            type="text"
            placeholder="First name"
            className=" py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray-500 w-full"
          />

          <input
            id="lastname"
            name="lastname"
            type="text"
            placeholder="Last name"
            className=" py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray-500 w-full"
          />
        </div>

        <div className="flex space-x-10 lg:flex-col lg:space-y-10 lg:space-x-0">
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            className=" py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray-500 w-full"
          />

          <input
            id="phoneNum"
            name="phoneNum"
            type="text"
            placeholder="Phone #"
            className=" py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray- w-full"
          />
        </div>

        <div className="flex space-x-10">
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Message"
            className=" py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray-500 w-full"
          />
        </div>

        <div className="flex justify-left">
          <button onClick={onClick} className='text-white bg-secondary rounded h-20 px-10 w-full'>Send A Message</button>
        </div>

      </form>
    </div>
  );
}

export default ContactForm;
