import { SearchOutlined } from '@ant-design/icons';
import DashboardLayout from '@components/DashboardLayout/DashboardLayout';
import { Button, Col, Input, message, Popconfirm, Row, Space, Table, Typography } from 'antd';
import useDebounce from 'hooks/useDebounce';
import React, { useMemo, useState } from 'react';
import CategoryAddEdit from './components/CategoryAddEdit';
import classes from './Category.module.scss';
import { useCategories } from 'hooks/api/useCategories';
import axios from 'axios';

const Category = () => {
  const [filter, setFilter] = useState('');
  const [isCategoryFormVisible, setIsCategoryFormVisible] = useState<'add' | 'edit' | false>(false);
  const [modalCategory, setModalCategory] = useState<{ name: string } | undefined>(undefined);
  const { data, mutate } = useCategories();

  const filteredCategories = useDebounce(
    (data || []).filter(item => item.name.toLowerCase().includes(filter.toLowerCase())),
    750,
  );

  const removeCategory = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/api/categories/${id}`);
      await mutate();
      message.success('Category has been deleted!');
    } catch (error) {
      message.error('Something went wrong!');
    }
  };

  const columns = useMemo(
    () => [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        render: (id: number) => id,
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (name: string) => name,
      },
      {
        title: 'Action',
        key: 'id',
        render: (item: { id: number; name: string }) => (
          <Space size="middle">
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => {
                removeCategory(item.id);
              }}
            >
              <a>Delete</a>
            </Popconfirm>
            <a
              onClick={() => {
                setModalCategory({ ...item });
                setIsCategoryFormVisible('edit');
              }}
            >
              Edit
            </a>
          </Space>
        ),
      },
    ],
    [],
  );
  return (
    <>
      {isCategoryFormVisible && (
        <CategoryAddEdit
          isModalVisible={!!isCategoryFormVisible}
          category={modalCategory}
          onCancel={async () => {
            setModalCategory(undefined);
            setIsCategoryFormVisible(false);
            await mutate();
          }}
          type={isCategoryFormVisible}
        />
      )}
      <DashboardLayout>
        <Row>
          <Col span={16}>
            <Typography.Title level={3} style={{ marginBottom: 24 }}>
              Categories
            </Typography.Title>
          </Col>
          <Col span={8} className={classes.actionButton}>
            <Button type="primary" onClick={() => setIsCategoryFormVisible('add')}>
              Add category
            </Button>
            <Input
              size="middle"
              placeholder="Search"
              prefix={<SearchOutlined />}
              onChange={e => setFilter(e.target.value)}
            />
          </Col>
        </Row>
        <Table columns={columns} dataSource={filteredCategories} />
      </DashboardLayout>
    </>
  );
};

export default Category;
