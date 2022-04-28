import { Button, Form, Input, message, Modal } from 'antd';
import { ProductProperty } from 'mock/productProperties';
import React from 'react';
import { useStore } from 'store';

interface ProductPropertyAddEditProps {
  isModalVisible: boolean;
  onCancel: () => void;
  type: 'add' | 'edit';
  productProperty?: ProductProperty;
}

const formItemLayout = { labelCol: { xs: { span: 24 } }, wrapperCol: { xs: { span: 24 } } };
const tailFormItemLayout = { wrapperCol: { xs: { span: 24, offset: 0 } } };

const PropertyAddEdit = ({ isModalVisible, productProperty, onCancel, type }: ProductPropertyAddEditProps) => {
  const [form] = Form.useForm();
  const addProductProperty = useStore(state => state.addProductProperty);
  const editProductProperty = useStore(state => state.editProductProperty);

  return (
    <Modal
      visible={isModalVisible}
      width={800}
      footer={null}
      onCancel={onCancel}
      title={type === 'add' ? 'Add product property' : 'Edit product property'}
    >
      <Form
        {...formItemLayout}
        form={form}
        name="productProperty"
        initialValues={{ ...productProperty }}
        layout="vertical"
        onFinish={values => {
          if (type === 'add') {
            addProductProperty({ ...values });
            message.success('Property has been added succesfully!');
            onCancel();
          } else if (type === 'edit') {
            editProductProperty({ key: productProperty?.key, ...values });
            message.success('Property has been edited succesfully!');
            onCancel();
          }
        }}
        validateTrigger="onBlur"
      >
        <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please input product name!' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="value" label="Value" rules={[{ required: true, message: 'Please input product price!' }]}>
          <Input />
        </Form.Item>
        <Form.Item {...tailFormItemLayout} style={{ marginBottom: 0 }}>
          <Button type="primary" htmlType="submit">
            {type === 'add' ? 'Add' : 'Save'}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default PropertyAddEdit;
