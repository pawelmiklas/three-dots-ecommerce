import React from 'react';
import Products from '@misc/dashboard/products/Products';
import { withAuth } from '@utils/withAuth';
import { UserRoles } from '@constants/userRoles';

const ProductsPage = () => {
  return <Products />;
};

export const getServerSideProps = withAuth({ roles: [UserRoles.ROLE_ADMIN] });

export default ProductsPage;
