import React, { useState } from "react";
import Numbers from "./Numbers";

function ClientsList() {
  const [selectedClientIndex, setSelectedClientIndex] = useState(0);
  const clients = [
    {
      id: 0,
      name: "JCircle9",
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
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/330px-Cisco_logo_blue_2016.svg.png",
      url: "https://www.webex.com/",
      description:
        "Cisco Webex is a cloud-based collaboration platform that offers video meetings, webinars, and team messaging. It’s designed for businesses of all sizes and offers a variety of features such as screen sharing, whiteboarding, and integration with other tools.",
    },
    {
      id: 5,
      name: "Zoom",
      logo: "https://1000logos.net/wp-content/uploads/2021/06/Zoom-Logo-2014-500x281.png",
      url: "https://www.zoom.us/",
      description: "Zoom is a video conferencing platform that allows you to connect with others remotely. It offers features such as screen sharing, virtual backgrounds, and breakout rooms for group discussions."
    },
    {
      id: 6,
      name: "Slack",
      logo: "https://www.slack.com/favicon.ico",
      url: "https://www.slack.com/",
      description: "Slack is a team communication and collaboration platform that offers real-time messaging, file sharing, and integration with other tools. It’s designed for teams of all sizes and can be used on a variety of devices."
    },
    {
      id: 7,
      name: "Skype",
      logo: "https://www.skype.com/favicon.ico",
      url: "https://www.skype.com/",
      description: "Skype is a communication platform that offers voice and video calls, instant messaging, and screen sharing. It’s available on a variety of devices and can be used for personal and business communication."
    },
    {
      id: 8,
      name: "Hangouts Chat",
      logo: "https://www.google.com/favicon.ico",
      url: "https://chat.google.com/",
      description: "Hangouts Chat is a messaging platform for teams that’s part of the G Suite family of tools. It offers features such as real-time messaging, document collaboration, and integration with other Google tools."
    },
    {
      id: 9,
      name: "GoToMeeting",
      logo: "https://www.gotomeeting.com/favicon.ico",
      url: "https://www.gotomeeting.com/",
      description: "GoToMeeting is a video conferencing platform that allows you to connect with others remotely. It offers features such as screen sharing, recording, and integration with other tools."
    },
    {
      id: 10,
      name: "BlueJeans",
      logo: "https://www.bluejeans.com/favicon.ico",
      url: "https://www.bluejeans.com/",
      description: "BlueJeans is a video conferencing platform that offers features such as high-quality video and audio, screen sharing, and integration with other tools. It’s designed for businesses of all sizes and can be used on a variety of devices."
    },
    {
      id: 11,
      name: "Google Duo",
      logo: "https://www.google.com/favicon.ico",
      url: "https://duo.google.com/",
      description: "Google Duo is a video calling app that allows you to connect with others from anywhere. It offers features such as high-quality video and audio, and is available on a variety of devices."
    },
    {
      id: 12,
      name: "Discord",
      logo: "https://www.discord.com/favicon.ico",
      url: "https://www.discord.com/",
      description: "Discord is a communication platform for gamers that offers voice and text chat, screen sharing, and live streaming. It’s available on a variety of devices and can be used for both personal and professional communication."
    },
    {
      id: 13,
      name: "Flowdock",
      logo: "https://www.flowdock.com/favicon.ico",
      url: "https://www.flowdock.com/",
      description: "Flowdock is a team communication and collaboration platform that offers real-time messaging, document collaboration, and integration with other tools. It’s designed for teams of all sizes and can be used on a variety of devices."
    },
    {
      id: 14,
      name: "Fuze",
      logo: "https://www.fuze.com/favicon.ico",
      url: "https://www.fuze.com/",
      description: "Fuze is a cloud-based communication and collaboration platform that offers video meetings, voice calls, and messaging. It’s designed for businesses of all sizes and offers a variety of features such as screen sharing and integration with other tools."
    },
    {
      id: 15,
      name: "Lifesize",
      logo: "https://www.lifesize.com/favicon.ico",
      url: "https://www.lifesize.com/",
      description: "Lifesize is a video conferencing platform that offers high-quality video and audio, screen sharing, and integration with other tools. It’s designed for businesses of all sizes and can be used on a variety of devices."
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
      <div className="bg-primary h-44 rounded-b-full md:rounded-b-2xl"></div>
      <div className="flex justify-center mt-20 mr-5 ml-5 pl-5 pr-5 items-end space-x-10 md:space-x-0 md:p-5 overflow-x-hidden">
        {selectedClientIndex !== 0 && (
          <i
            className="ri-arrow-left-line text-4xl text-gray-600 cursor-pointer sm:hidden"
            onClick={previous}
          ></i>
        )}

        <div className="grid grid-cols-3 gap-10 lg:grid-cols-1 md:gap-2 r-5 pl-5">
          {[
            clients[selectedClientIndex],
            clients[selectedClientIndex + 1],
            clients[selectedClientIndex + 2],
          ].map((item, index) => (
            <div key={index} className="bg-white shadow p-5 md:w-auto md:h-auto border h-[400px]">
              <div className="flex space-x-10 md:space-x-0 items-center justify-between md:flex-col">
                <img src={item.logo} alt={item.name} className="h-10 z-20 inline-flex" />
                <h1 className="text-primary font-semibold text-xl">
                  {item.name}
                </h1>
              </div>
              <p className="overflow-y-scroll text-gray-600 md:text-md mt-5">{item.description}</p>
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
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedClientIndex(index)}
              className={`bg-gray-200 h-4 w-4 rounded-full cursor-pointer hover:scale-105 transition-all transform duration-300 ${selectedClientIndex === index && "border-2 border-secondary h-5 w-5"
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
