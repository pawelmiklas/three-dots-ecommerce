import { SearchOutlined } from '@ant-design/icons';
import DashboardLayout from '@components/DashboardLayout/DashboardLayout';
import { Button, Col, Input, message, Popconfirm, Row, Space, Table, Typography } from 'antd';
import useDebounce from 'hooks/useDebounce';
import { ProductProperty } from 'mock/productProperties';
import React, { useMemo, useState } from 'react';
import { useStore } from 'store';
import PropertyAddEdit from './components/PropertyAddEdit';
import classes from './Properties.module.scss';

const Properties = () => {
  const [filter, setFilter] = useState('');
  const [isProductPropertyFormVisible, setIsProductPropertyFormVisible] = useState<'add' | 'edit' | false>(false);
  const [modalProductProperty, setModalProductProperty] = useState<ProductProperty | undefined>(undefined);
  const properties = useStore(state => state.productProperties);
  const removeProductProperty = useStore(state => state.removeProductProperty);
  const filteredProducts = useDebounce(
    properties.filter(item => item.name.includes(filter)),
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
        title: 'Value',
        dataIndex: 'value',
        key: 'value',
        render: (value: string) => value,
      },
      {
        title: 'Action',
        key: 'action',
        render: (item: any) => (
          <Space size="middle">
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => {
                removeProductProperty(item.key);
                message.success('Product has been deleted!');
              }}
            >
              <a>Delete</a>
            </Popconfirm>
            <a
              onClick={() => {
                setModalProductProperty(item);
                setIsProductPropertyFormVisible('edit');
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
      {isProductPropertyFormVisible && (
        <PropertyAddEdit
          isModalVisible={!!isProductPropertyFormVisible}
          productProperty={modalProductProperty}
          onCancel={() => {
            setModalProductProperty(undefined);
            setIsProductPropertyFormVisible(false);
          }}
          type={isProductPropertyFormVisible}
        />
      )}
      <DashboardLayout>
        <Row>
          <Col span={16}>
            <Typography.Title level={3} style={{ marginBottom: 24 }}>
              Properties
            </Typography.Title>
          </Col>
          <Col span={8} className={classes.actionButton}>
            <Button type="primary" onClick={() => setIsProductPropertyFormVisible('add')}>
              Add property
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

export default Properties;
