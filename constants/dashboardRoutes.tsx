import { UnorderedListOutlined, TeamOutlined, ContainerOutlined, TagOutlined } from '@ant-design/icons';

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
    name: 'Users',
    icon: <TeamOutlined />,
    route: '/dashboard/users',
  },
];

export { dashboardRoutes };
