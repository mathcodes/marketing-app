import React from 'react';
import Layout from '../../components/Layout';
import Intro from './Intro';
import Services from './Services';
import Credentials from './Credentials';

const About: React.FC = () => (
  <Layout>
    <Intro />
    <Services />
    <Credentials />
  </Layout>
);

export default About;
