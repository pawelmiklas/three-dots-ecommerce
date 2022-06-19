import React from 'react';
import Users from '@misc/dashboard/users/Users';
import { withAuth } from '@utils/withAuth';
import { UserRoles } from '@constants/userRoles';

const UsersPage = () => {
  return <Users />;
};

export const getServerSideProps = withAuth({ roles: [UserRoles.ROLE_ADMIN] });

export default UsersPage;
