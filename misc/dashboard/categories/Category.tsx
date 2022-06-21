import DashboardLayout from '@components/DashboardLayout/DashboardLayout';
import { Button, Card, Col, Typography } from 'antd';
import { useCategories } from 'hooks/api/useCategories';
import { useRouter } from 'next/router';
import { useState } from 'react';
import CategoryDetails from './components/CategoryDetails';

const tabListNoTitle = [
  {
    key: 'productsInCategory',
    tab: 'Products in category',
  },
];

const contentListNoTitle: Record<string, React.ReactNode> = {
  productsInCategory: <CategoryDetails />,
};

const Category = () => {
  const [activeTab, setActiveTab] = useState('productsInCategory');
  const router = useRouter();
  const { data } = useCategories();

  const category = data?.find(item => item.id === Number(router.query.id));

  return (
    <DashboardLayout>
      <Col span={16}>
        <Typography.Title level={3} style={{ marginBottom: 16 }}>
          {category?.name}
        </Typography.Title>
        <Button style={{ marginBottom: 16 }} onClick={() => router.push('/dashboard/categories')}>
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

export default Category;
