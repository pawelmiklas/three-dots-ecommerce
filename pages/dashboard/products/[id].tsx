import React from 'react';
import Product from '@misc/dashboard/products/Product';
import { withAuth } from '@utils/withAuth';
import { UserRoles } from '@constants/userRoles';

const ProductView = () => {
  return <Product />;
};

export const getServerSideProps = withAuth({ roles: [UserRoles.ROLE_ADMIN] });

export default ProductView;
