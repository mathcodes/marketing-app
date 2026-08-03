import React from 'react';
import Layout from '../../components/Layout';
import Intro from './Intro';
import ClientsList from './ClientsList';

function Clients(): React.ReactElement {
  return (
    <Layout>
      <Intro />
      <ClientsList />
    </Layout>
  );
}

export default Clients;