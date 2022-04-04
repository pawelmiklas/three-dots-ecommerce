import DashboardLayout from "@components/DashboardLayout/DashboardLayout";
import {
  Typography,
  Table,
  Tag,
  Space,
  Popconfirm,
  Button,
  Row,
  Col,
} from "antd";
import { products } from "mock/products";
import React from "react";
import NumberFormat from "react-number-format";
import classes from "./Products.module.scss";

const ProductsPage = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: string) => (
        <NumberFormat
          value={price}
          displayType="text"
          thousandSeparator
          prefix="$"
        />
      ),
    },
    {
      title: "Discount",
      dataIndex: "discount",
      key: "discount",
      render: (discount: string) => `${discount}%`,
    },
    {
      title: "Properties",
      key: "properties",
      dataIndex: "properties",
      render: (properties: string[]) => (
        <>
          {properties.map((tag: any) => (
            <Tag color="green" key={tag}>
              {tag.toUpperCase()}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: "Collections",
      key: "collections",
      dataIndex: "collections",
      render: (collections: string[]) => (
        <>
          {collections.map((tag: any) => (
            <Tag color="geekblue" key={tag}>
              {tag.toUpperCase()}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <Popconfirm title="Sure to delete?" onConfirm={() => {}}>
            <a>Delete</a>
          </Popconfirm>
          <a>Edit</a>
          <a>View</a>
        </Space>
      ),
    },
  ];

  return (
    <DashboardLayout>
      <Row>
        <Col span={12}>
          <Typography.Title level={3} style={{ marginBottom: 24 }}>
            Products
          </Typography.Title>
        </Col>
        <Col span={12} className={classes.actionButton}>
          <Button type="primary">Add product</Button>
        </Col>
      </Row>
      <Table columns={columns} dataSource={products} />
    </DashboardLayout>
  );
};

export default ProductsPage;
