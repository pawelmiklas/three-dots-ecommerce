import React from 'react';
import Category from '@misc/dashboard/categories/Category';
import { withAuth } from '@utils/withAuth';
import { UserRoles } from '@constants/userRoles';

const CategoryView = () => {
  return <Category />;
};

export const getServerSideProps = withAuth({ roles: [UserRoles.ROLE_ADMIN] });

export default CategoryView;
