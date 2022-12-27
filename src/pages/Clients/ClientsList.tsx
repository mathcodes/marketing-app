import React, { useState } from "react";
import Numbers from "./Numbers";

function ClientsList() {
  const [selectedClientIndex, setSelectedClientIndex] = useState(0);
  const clients = [
    {
      id: 0,
      name: "Slack",
      logo: "https://www.jonchristie.net/favicon.png",
      url: "https://www.tcs.com/",
      description:
        "Slack is a cloud-based set of tools and services that makes it easy to get work done. It’s built for teams of all sizes, and has a simple, beautiful design that’s easy to use and works great on any device.",
    },
{
    id: 1,
    name: "Microsoft Teams",
    logo: "https://www.microsoft.com/favicon.ico",
    url: "https://www.microsoft.com/teams/",
    description:
      "Microsoft Teams is a collaboration platform that brings together chat, meetings, and file storage in one place. It’s designed for teams of all sizes and can be used across a variety of devices.",
  }, 
  {
    id: 3,
    name: "Google Meet",
    logo: "https://www.google.com/favicon.ico",
    url: "https://meet.google.com/",
    description:
      "Google Meet is a video meeting platform that allows you to connect with others from anywhere. It’s integrated with other Google products and offers features such as screen sharing and real-time captions.",
  },
  {
    id: 4,
    name: "Cisco Webex",
    logo: "https://www.cisco.com/favicon.ico",
    url: "https://www.webex.com/",
    description:
      "Cisco Webex is a cloud-based collaboration platform that offers video meetings, webinars, and team messaging. It’s designed for businesses of all sizes and offers a variety of features such as screen sharing, whiteboarding, and integration with other tools.",
  }
];

  const next = () => {
    setSelectedClientIndex(selectedClientIndex + 1);

  };

  const previous = () => {
    setSelectedClientIndex(selectedClientIndex - 1);
  };

  return (
    <div>
      <div className="bg-primary h-44 rounded-b-full sm:rounded-b-2xl"></div>
      <div className="flex justify-center -mt-44 items-end space-x-10 sm:space-x-0 sm:p-5 overflow-x-hidden">
        {selectedClientIndex !== 0 && (
          <i
            className="ri-arrow-left-line text-4xl text-gray-600 cursor-pointer sm:hidden"
            onClick={previous}
          ></i>
        )}

        <div className="grid grid-cols-3 gap-10 sm:grid-cols-1 sm:gap-2">
          {[
            clients[selectedClientIndex],
            clients[selectedClientIndex + 1],
            clients[selectedClientIndex + 2],
          ].map((item, index) => (
            <div key={index} className="bg-white shadow p-5 w-[400px] sm:w-auto sm:h-auto border h-[350px]">
              <div className="flex space-x-10 sm:space-x-0 items-center justify-between sm:flex-col">
                <img src={item.logo} alt="" className="h-32 w-32 z-20 sm:w-10 sm:h-10" />
                <h1 className="text-primary font-semibold text-2xl">
                  {item.name}
                </h1>
              </div>
              <p className="text-gray-600 text-md mt-10">{item.description}</p>
            </div>
          ))}
        </div>

        {selectedClientIndex < 4 && (
          <i
            className="ri-arrow-right-line text-4xl text-gray-600 cursor-pointer sm:hidden"
            onClick={next}
          ></i>
        )}
      </div>

      <div className="flex justify-center mt-10">
        <div className="flex space-x-2">
          {[1, 2, 3, 4,5].map((item, index) => (
            <div
              key={index}
              onClick={()=>setSelectedClientIndex(index)}
              className={`bg-gray-200 h-4 w-4 rounded-full cursor-pointer hover:scale-105 transition-all transform duration-300 ${
                selectedClientIndex === index && "border-2 border-secondary h-5 w-5"
              }`}
            ></div>
          ))}
        </div>
      </div>

      <Numbers />
    </div>
  );
}

export default ClientsList;
