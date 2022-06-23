import DashboardLayout from '@components/DashboardLayout/DashboardLayout';
import { ArrowDownOutlined, SearchOutlined } from '@ant-design/icons';
import { Typography, Table, Space, Popconfirm, Button, Row, Col, Statistic, message, Input } from 'antd';
import React, { useMemo, useState } from 'react';
import NumberFormat from 'react-number-format';
import classes from './Products.module.scss';
import useDebounce from 'hooks/useDebounce';
import ProductAdd from './components/ProductAdd';
import { useProducts } from 'hooks/api/useProducts';
import { httpClient } from '@utils/httpClient';
import { useRouter } from 'next/router';

const ProductsPage = () => {
  const router = useRouter();
  const [isProductAdd, setIsProductAdd] = useState(false);
  const [filter, setFilter] = useState('');
  const { data, mutate } = useProducts();

  const filteredProducts = useDebounce(
    (data || []).filter(item => item.name.toLowerCase().includes(filter.toLowerCase())),
    750,
  );

  const columns = useMemo(
    () => [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text: string) => text,
      },
      {
        title: 'Base price',
        dataIndex: 'price',
        key: 'price',
        render: (price: string) => <NumberFormat value={price} displayType="text" thousandSeparator prefix="$" />,
      },
      {
        title: 'Discount',
        dataIndex: 'discount',
        key: 'discount',
        render: (discount: number) => (
          <Statistic
            value={discount > 0 ? discount : '-'}
            precision={2}
            valueStyle={{ color: discount > 0 ? '#3f8600' : '' }}
            prefix={discount > 0 ? <ArrowDownOutlined /> : null}
            suffix={discount > 0 ? '$' : undefined}
            className={classes.statistics}
          />
        ),
      },
      {
        title: 'Final price',
        key: 'finalPrice',
        render: (item: any) => (
          <NumberFormat value={item.price - item.discount} displayType="text" thousandSeparator prefix="$" />
        ),
      },
      {
        title: 'Action',
        key: 'action',
        render: (item: any) => (
          <Space size="middle">
            <Popconfirm
              title="Sure to delete?"
              onConfirm={async () => {
                try {
                  await httpClient.delete(`api/admin/products/${item.productId}/remove`);
                  await mutate();
                  message.success('Product has been deleted!');
                } catch (error) {
                  message.error('Something went wrong!');
                }
              }}
            >
              <a>Delete</a>
            </Popconfirm>
            <a
              onClick={() => {
                router.push(`/dashboard/products/${item.productId}`);
              }}
            >
              View
            </a>
          </Space>
        ),
      },
    ],
    [],
  );

  return (
    <>
      {isProductAdd && (
        <ProductAdd
          isModalVisible={isProductAdd}
          onCancel={() => {
            setIsProductAdd(false);
            mutate();
          }}
        />
      )}
      <DashboardLayout>
        <Row>
          <Col span={16}>
            <Typography.Title level={3} style={{ marginBottom: 24 }}>
              Products
            </Typography.Title>
          </Col>
          <Col span={8} className="actionButton">
            <Button type="primary" onClick={() => setIsProductAdd(true)}>
              Add product
            </Button>
            <Input
              size="middle"
              placeholder="Search"
              prefix={<SearchOutlined />}
              onChange={e => setFilter(e.target.value)}
            />
          </Col>
        </Row>
        <Table columns={columns} dataSource={filteredProducts} />
      </DashboardLayout>
    </>
  );
};

export default ProductsPage;
