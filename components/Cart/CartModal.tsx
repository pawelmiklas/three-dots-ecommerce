import { ShoppingOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import classes from './CartModal.module.scss';

const CartModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button size="middle" type="primary" className={classes.button} icon={<ShoppingOutlined />} onClick={showModal} />
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default CartModal;
