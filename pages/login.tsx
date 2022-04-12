import React from 'react';
import LoginPage from '@misc/login/LoginPage';
import Layout from '@components/Layout/Layout';

type Props = {};

const login = (props: Props) => {
  return (
    <Layout>
      <LoginPage />
    </Layout>
  );
};

export default login;
