import {
  UnorderedListOutlined,
  TeamOutlined,
  ContainerOutlined,
  TagOutlined,
  DollarOutlined,
  CommentOutlined,
} from '@ant-design/icons';

const dashboardRoutes = [
  {
    name: 'Products',
    icon: <UnorderedListOutlined />,
    route: '/dashboard/products',
  },
  {
    name: 'Categories',
    icon: <ContainerOutlined />,
    route: '/dashboard/category',
  },
  {
    name: 'Collections',
    icon: <TagOutlined />,
    route: '/dashboard/collections',
  },
  {
    name: 'Discounts',
    icon: <DollarOutlined />,
    route: '/dashboard/discounts',
  },
  {
    name: 'Users',
    icon: <TeamOutlined />,
    route: '/dashboard/users',
  },
  {
    name: 'Reviews',
    icon: <CommentOutlined />,
    route: '/dashboard/reviews',
  },
];

export { dashboardRoutes };
