import React from 'react';
import RegistrationPage from '@misc/registration/RegistrationPage';
import Layout from '@components/Layout/Layout';
import { withAuth } from '@utils/withAuth';

const Registration = () => (
  <Layout>
    <RegistrationPage />
  </Layout>
);

export const getServerSideProps = withAuth({ roles: [] });

export default Registration;
