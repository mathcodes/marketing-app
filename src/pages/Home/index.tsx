import React from "react";
import Layout from "../../components/Layout";
import Intro from "./Intro";
import UserLogin from "./UserLogin";
import MarketingSrategies from "./MarketingSrategies";
import WhyMarketing from "./WhyMarketing";

function Home(props: {}) {
  return (
    <Layout>
      {/* setup conditional to render the correct ui based on login status */}
      <div className="px-32 sm:px-2">
        <Intro />
        <MarketingSrategies />
        <WhyMarketing />
      </div>
    </Layout>

      
  );
}

export default Home;
