import React from "react";

interface CredentialsProps {
  // Declare any props that the component will receive here
}

const Credentials: React.FC<CredentialsProps> = (props: CredentialsProps) => {
  const items = [
    {
      title: "Lorem Ipsum",
      image: "images/innovation.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Dolor Sit Amet",
      image: "images/investment.png",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Consectetur Adipiscing",
      image: "images/customer-support.png",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  return (
    <div className="mx-32 sm:mx-3 mt-20 border shadow">
      <div className="bg-primary h-72 w-full flex justify-center items-center">
        <h1 className="text-7xl font-semibold text-white sm:text-4xl">Why Choose US</h1>
      </div>
      <div className="grid grid-cols-3 p-5 gap-10 sm:grid-cols-1">
        {items.map((item) => (
          <div className="p-5 bg-white border shadow flex flex-col space-y-5 items-center transform hover:scale-105 duration-300">
            <img src={item.image} className="h-20 w-20" />
            <h1 className="text-2xl font-semibold">{item.title}</h1>
            <p className="text-gray-600 text-md">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Credentials;
