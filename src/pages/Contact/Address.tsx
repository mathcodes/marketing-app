import React from "react";

function Address() {
  return (
    <div className="flex justify-center">
      <div className="bg-primary rounded-3xl flex-col space-y-10 p-10 text-white">
        <h1 className="text-3xl font-semibold">Get In Touch</h1>
        <p>
          YOUR COMPANY NAME lorem ipsum dolor sit amet, consectetur adipiscing.
        </p>

        <div className="flex space-x-5 items-center">
          <div className="h-12 w-12 p-2 rounded">
            <i className="ri-home-2-line text-3xl text-secondary"></i>
          </div>
          <div>
            <h1 className="font-semibold text-xl">Visit</h1>
            <p>CITY, STATE, COUNTRY</p>
            
          </div>
        </div>

        <div className="flex space-x-5 items-center">
          <div className="h-12 w-12 p-2 rounded">
            <i className="ri-mail-send-line text-3xl text-secondary"></i>
          </div>
          <div>
            <h1 className="font-semibold text-xl">Mail</h1>
            <p>jon@jonchristie.net</p>
           
          </div>
        </div>

        
        <div className="flex space-x-5 items-center">
          <div className="h-12 w-12 p-2 rounded">
            <i className="ri-phone-line text-3xl text-secondary"></i>
          </div>
          <div>
            <h1 className="font-semibold text-xl">Call</h1>
            <p>(919) 368-3369</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
