import React from 'react';
import LoginPage from '@misc/login/LoginPage';
import Layout from '@components/Layout/Layout';
import { withAuth } from '@utils/withAuth';

const Login = () => (
  <Layout>
    <LoginPage />
  </Layout>
);

export const getServerSideProps = withAuth({ roles: [] });

export default Login;
