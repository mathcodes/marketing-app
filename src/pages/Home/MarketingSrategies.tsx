import React from "react";

function MarketingSrategies() {
  const strategies = [
    {
      title: "CONTENT MARKETING",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.. ",
      image: "images/marketing1.png",
    },
    {
      title: "INBOUND MARKETING",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      image: "https://www.hubspot.com/hubfs/International%20Web/Brand-refresh-2022/EN/Flywheel-Graphic-EN.svg",
    },
    {
      title: "SOCIAL MEDIA",
      description:
        "Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Mi sit amet mauris commodo quis imperdiet. Libero enim sed faucibus turpis in eu mi bibendum. Vitae suscipit tellus mauris a diam maecenas sed enim. Cras fermentum odio eu feugiat pretium nibh ipsum. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Vitae suscipit tellus mauris a diam maecenas sed. Aliquet bibendum enim facilisis gravida neque. ",
      image: "images/hexmarketing.png",
    },
    {
      title: "SEARCH ENGINE OPTIMIZATION",
      description:
        "Blandit turpis cursus in hac. Gravida neque convallis a cras semper. Porta nibh venenatis cras sed felis eget velit. Pharetra diam sit amet nisl. Amet justo donec enim diam vulputate ut. Tellus elementum sagittis vitae et leo duis. Scelerisque felis imperdiet proin fermentum leo. Scelerisque eleifend donec pretium vulputate sapien. Vitae auctor eu augue ut lectus arcu bibendum at varius. Iaculis at erat pellentesque adipiscing.",
      image: "images/seoM.jpg",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-semibold text-primary sm:mt-10">
        Want to boost your business growth ?
      </h1>
      <h1 className="text-7xl font-semibold text-primary mt-10 sm:text-5xl">
        The <b className="text-secondary">SOLUTION</b> is here..
      </h1>
      <p className="text-gray-600 text-xl mt-10">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <div className="grid grid-cols-2 gap-20 mt-10 sm:grid-cols-1">
        {strategies.map((item) => {
          return (
            <div className="border border-primary p-5 flex flex-col space-y-10 rounded transform hover:scale-105 duration-300">
              <h1 className="mx-20 sm:mx-5 text-center -mt-8 bg-white border-primary border text-2xl rounded text-secondary py-2">
                {item.title}
              </h1>
              <img src={item.image} alt="" className="h-24 w-24" />
              <p className="text-gray-600 text-md hover:text-primary">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MarketingSrategies;
