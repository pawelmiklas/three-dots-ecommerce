import React from 'react';
import Sizes from '@misc/dashboard/sizes/Sizes';
import { withAuth } from '@utils/withAuth';
import { UserRoles } from '@constants/userRoles';

const SizesPage = () => {
  return <Sizes />;
};

export const getServerSideProps = withAuth({ roles: [UserRoles.ROLE_ADMIN] });

export default SizesPage;
