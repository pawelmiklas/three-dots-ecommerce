import { UserRoles } from '@constants/userRoles';
import Category from '@misc/dashboard/category/Category';
import { withAuth } from '@utils/withAuth';

const CategoryPage = () => {
  return <Category />;
};

export const getServerSideProps = withAuth({ roles: [UserRoles.ROLE_ADMIN] });

export default CategoryPage;
