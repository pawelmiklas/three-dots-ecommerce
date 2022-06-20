import DashboardLayout from '@components/DashboardLayout/DashboardLayout';
import { Button, Card, Col, Typography } from 'antd';
import { useProduct } from 'hooks/api/useProduct';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ProductDetails from './components/ProductDetails';

const tabListNoTitle = [
  {
    key: 'details',
    tab: 'Details',
  },
  {
    key: 'variants',
    tab: 'Variants',
  },
  {
    key: 'reviews',
    tab: 'Reviews',
  },
  {
    key: 'stock',
    tab: 'Stock',
  },
];

const contentListNoTitle: Record<string, React.ReactNode> = {
  details: <ProductDetails />,
  variants: <p>variants content</p>,
  reviews: <p>reviews content</p>,
  stock: <p>stock content</p>,
};

const Product = () => {
  const [activeTab, setActiveTab] = useState('details');
  const router = useRouter();
  const { data } = useProduct(Number(router.query.id));

  return (
    <DashboardLayout>
      <Col span={16}>
        <Typography.Title level={3} style={{ marginBottom: 16 }}>
          {data?.name}
        </Typography.Title>
        <Button style={{ marginBottom: 16 }} onClick={() => router.push('/dashboard/products')}>
          Go back to list
        </Button>
      </Col>
      <Card
        tabList={tabListNoTitle}
        activeTabKey={activeTab}
        onTabChange={(key: string) => {
          setActiveTab(key);
        }}
      >
        {contentListNoTitle[activeTab]}
      </Card>
    </DashboardLayout>
  );
};

export default Product;
