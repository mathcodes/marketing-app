import React from 'react';
import Layout from '../../components/Layout';
import Intro from './Intro';
import MarketingStrategies from './MarketingSrategies';
import WhyMarketing from './WhyMarketing';

function Home() {
  return (
    <Layout>
      <Intro />
      <MarketingStrategies />
      <WhyMarketing />
    </Layout>
  );
}

export default Home;
