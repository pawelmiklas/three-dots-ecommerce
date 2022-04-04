import {
  UnorderedListOutlined,
  TeamOutlined,
  ContainerOutlined,
  FileTextOutlined,
  TagOutlined,
  DollarOutlined,
  MessageOutlined,
} from "@ant-design/icons";

const dashboardRoutes = [
  {
    name: "Products",
    icon: <UnorderedListOutlined />,
    route: "/dashboard/products",
  },
  {
    name: "Properties",
    icon: <FileTextOutlined />,
    route: "/dashboard/properties",
  },
  {
    name: "Collections",
    icon: <TagOutlined />,
    route: "/dashboard/collections",
  },
  {
    name: "Categories",
    icon: <ContainerOutlined />,
    route: "/dashboard/categories",
  },
  {
    name: "Discounts",
    icon: <DollarOutlined />,
    route: "/dashboard/discounts",
  },
  {
    name: "Users",
    icon: <TeamOutlined />,
    route: "/dashboard/users",
  },
  {
    name: "Reviews",
    icon: <MessageOutlined />,
    route: "/dashboard/reviews",
  },
];

export { dashboardRoutes };
