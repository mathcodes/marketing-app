import React from 'react';
import Layout from '../../components/Layout';
import Intro from './Intro';
import MarketingStrategies from './MarketingSrategies';
import WhyMarketing from './WhyMarketing';

function Home() {
  return (
    <Layout>
      <div className='px-32 sm:px-4 md:px-8'>
        <Intro />
        <MarketingStrategies />
        <WhyMarketing />
      </div>
    </Layout>
  );
}

export default Home;
