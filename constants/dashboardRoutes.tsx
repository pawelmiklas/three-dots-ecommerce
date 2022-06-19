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
    name: 'Sizes',
    icon: <TagOutlined />,
    route: '/dashboard/sizes',
  },
  {
    name: 'Discounts',
    icon: <DollarOutlined />,
    route: '/dashboard/discounts',
  },
  {
    name: 'Reviews',
    icon: <CommentOutlined />,
    route: '/dashboard/reviews',
  },
  {
    name: 'Users',
    icon: <TeamOutlined />,
    route: '/dashboard/users',
  },
];

export { dashboardRoutes };
