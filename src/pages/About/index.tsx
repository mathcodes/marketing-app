import React from "react";
import Layout from "../../components/Layout";
import Intro from "./Intro";
import Services from "./Services";
import Credentials from "./Credentials";

interface AboutProps {
  // Declare any props that the component will receive here
}

const About: React.FC<AboutProps> = (props: AboutProps) => {
  return (
    <Layout>
     
          <Intro />
          <Services />
          <Credentials/>
  
    </Layout>
  );
}

export default About;
