import { UnorderedListOutlined, TeamOutlined, ContainerOutlined, TagOutlined, StockOutlined } from '@ant-design/icons';

const dashboardRoutes = [
  {
    name: 'Statistics',
    icon: <StockOutlined />,
    route: '/dashboard/stats',
  },
  {
    name: 'Products',
    icon: <UnorderedListOutlined />,
    route: '/dashboard/products',
  },
  {
    name: 'Categories',
    icon: <ContainerOutlined />,
    route: '/dashboard/categories',
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
