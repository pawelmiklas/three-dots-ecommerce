import React from 'react';
import RegistrationPage from '@misc/registration/RegistrationPage';
import Layout from '@components/Layout/Layout';

type Props = {};

const registration = (props: Props) => {
  return (
    <Layout>
      <RegistrationPage />
    </Layout>
  );
};

export default registration;
