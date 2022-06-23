import DashboardLayout from '@components/DashboardLayout/DashboardLayout';
import { SearchOutlined } from '@ant-design/icons';
import { Typography, Table, Space, Row, Col, Input } from 'antd';
import React, { useMemo, useState } from 'react';
import useDebounce from 'hooks/useDebounce';
import UserView from './components/UserView';
import { useUsers } from 'hooks/api/useUsers';

const UsersPage = () => {
  const [modalUser, setModalUser] = useState<any | undefined>(undefined);
  const [isUserViewVisible, setIsUserViewVisible] = useState(false);
  const [filter, setFilter] = useState('');
  const { data } = useUsers();

  const filteredUsers = useDebounce(
    (data || []).filter(
      (item: any) =>
        item.firstName.toLowerCase().includes(filter.toLowerCase()) ||
        item.lastName.toLowerCase().includes(filter.toLowerCase()),
    ),
    750,
  );

  const columns = useMemo(
    () => [
      {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
        render: (text: string) => text,
      },
      {
        title: 'First Name',
        dataIndex: 'firstName',
        key: 'firstName',
        render: (text: string) => text,
      },
      {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: 'lastName',
        render: (text: string) => text,
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        render: (text: string) => text,
      },
      {
        title: 'Action',
        key: 'action',
        render: (item: any) => (
          <Space size="middle">
            <a
              onClick={() => {
                setModalUser(item);
                setIsUserViewVisible(true);
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
      {modalUser && (
        <UserView
          isModalVisible={isUserViewVisible}
          user={modalUser}
          onCancel={() => {
            setModalUser(undefined);
            setIsUserViewVisible(false);
          }}
        />
      )}
      <DashboardLayout>
        <Row>
          <Col span={16}>
            <Typography.Title level={3} style={{ marginBottom: 24 }}>
              Users
            </Typography.Title>
          </Col>
          <Col span={8} className="actionButton">
            <Input
              size="middle"
              placeholder="Search"
              prefix={<SearchOutlined />}
              onChange={e => setFilter(e.target.value)}
            />
          </Col>
        </Row>
        <Table columns={columns} dataSource={filteredUsers} />
      </DashboardLayout>
    </>
  );
};

export default UsersPage;
