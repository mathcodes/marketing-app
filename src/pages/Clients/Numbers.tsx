import React from "react";

function Numbers() {
  return (
    <div className="px-52 sm:px-5 mt-20">
      <h1 className="text-2xl text-gray-600 my-5">Number don't lie ....</h1>
      <div className="bg-secondary flex space-x-10 md:space-x-0 p-5 justify-between rounded md:flex-col md:items-start md:space-y-10">
        <div className="flex flex-col space-y-2">
          <h1 className="lg:text-3xl text-4xl text-white">3,023</h1>
          <h1 className="text-white  text-2xl">Clients</h1>
        </div>

        <div className="flex flex-col space-y-2">
          <h1 className="lg:text-3xl text-4xl text-white">412</h1>
          <h1 className="text-white  text-2xl">Projects</h1>
        </div>

        <div className="flex flex-col space-y-2">
          <h1 className="lg:text-3xl  text-4xl text-white">82</h1>
          <h1 className="text-white  text-2xl">Locations</h1>
        </div>
      </div>
    </div>
  );
}

export default Numbers;
