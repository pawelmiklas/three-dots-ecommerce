import { Descriptions, Modal } from 'antd';
import { User } from 'hooks/api/useUsers';
import React from 'react';

interface UserViewProps {
  isModalVisible: boolean;
  user: User;
  onCancel: () => void;
}

const UserView = ({ isModalVisible, user, onCancel }: UserViewProps) => (
  <Modal visible={isModalVisible} width={800} footer={null} onCancel={onCancel} title="User Info">
    <Descriptions bordered>
      <Descriptions.Item label="username" span={3}>
        {user.username}
      </Descriptions.Item>
      <Descriptions.Item label="Email" span={3}>
        {user.email}
      </Descriptions.Item>
      <Descriptions.Item label="Full Name" span={3}>
        {`${user.firstName} ${user.lastName}`}
      </Descriptions.Item>
      <Descriptions.Item label="Phone number" span={3}>
        {user.phoneNumber}
      </Descriptions.Item>
      <Descriptions.Item label="City" span={2}>
        {user.city}
      </Descriptions.Item>
      <Descriptions.Item label="Zip code" span={1}>
        {user.zipCode}
      </Descriptions.Item>
      <Descriptions.Item label="Street" span={3}>
        {user.street}
      </Descriptions.Item>
      <Descriptions.Item label="Building number" span={2}>
        {user.buildingNumber}
      </Descriptions.Item>
      <Descriptions.Item label="Apartment number" span={4}>
        {user.apartmentNumber}
      </Descriptions.Item>
    </Descriptions>
  </Modal>
);

export default UserView;
