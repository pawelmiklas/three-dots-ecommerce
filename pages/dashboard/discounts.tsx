import React from 'react';
import Discounts from '@misc/dashboard/discounts/Discounts';
import { withAuth } from '@utils/withAuth';
import { UserRoles } from '@constants/userRoles';

const DiscountsPage = () => {
  return <Discounts />;
};

export const getServerSideProps = withAuth({ roles: [UserRoles.ROLE_ADMIN] });

export default DiscountsPage;
