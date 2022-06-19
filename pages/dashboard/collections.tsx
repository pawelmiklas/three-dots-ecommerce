import React from 'react';
import Collections from '@misc/dashboard/collections/Collections';
import { withAuth } from '@utils/withAuth';
import { UserRoles } from '@constants/userRoles';

const CollectionsPage = () => {
  return <Collections />;
};
export const getServerSideProps = withAuth({ roles: [UserRoles.ROLE_ADMIN] });

export default CollectionsPage;
