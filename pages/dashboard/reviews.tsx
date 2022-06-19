import React from 'react';
import Reviews from '@misc/dashboard/reviews/Reviews';
import { withAuth } from '@utils/withAuth';
import { UserRoles } from '@constants/userRoles';

const ReviewsPage = () => {
  return <Reviews />;
};

export const getServerSideProps = withAuth({ roles: [UserRoles.ROLE_ADMIN] });

export default ReviewsPage;
