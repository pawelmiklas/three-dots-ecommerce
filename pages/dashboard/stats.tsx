import React from 'react';
import Stats from '@misc/dashboard/stats/Stats';
import { withAuth } from '@utils/withAuth';
import { UserRoles } from '@constants/userRoles';

const StatsPage = () => {
  return <Stats />;
};

export const getServerSideProps = withAuth({ roles: [UserRoles.ROLE_ADMIN] });

export default StatsPage;
