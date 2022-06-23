import { httpClient } from '@utils/httpClient';
import { Button, Form, Input, message, Modal, Select } from 'antd';

interface ProductVariantAddProps {
  isModalVisible: boolean;
  productId: number;
  onCancel: () => void;
}
const formItemLayout = { labelCol: { xs: { span: 24 } }, wrapperCol: { xs: { span: 24 } } };
const tailFormItemLayout = { wrapperCol: { xs: { span: 24, offset: 0 } } };

const ProductVariantAdd = ({ isModalVisible, productId, onCancel }: ProductVariantAddProps) => {
  const [form] = Form.useForm();

  return (
    <Modal visible={isModalVisible} width={800} footer={null} onCancel={onCancel} title="Add product variant">
      <Form
        {...formItemLayout}
        form={form}
        name="product"
        initialValues={{ color: '', imgUrl: '' }}
        layout="vertical"
        onFinish={async values => {
          try {
            await httpClient.post(`api/admin/products/${productId}/add`, {
              color: values.color,
              imageUrl: JSON.stringify(values.images),
            });
            message.success('Product variant has been added successfully!');
            onCancel();
          } catch (error) {
            message.error('Something went wrong!');
          }
        }}
        validateTrigger="onBlur"
      >
        <Form.Item
          name="color"
          label="Color"
          rules={[
            {
              required: true,
              message: 'Please input product color!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="images"
          label="Images"
          rules={[
            {
              required: true,
              message: 'Please input image!',
            },
          ]}
        >
          <Select mode="tags" />
        </Form.Item>
        <Form.Item {...tailFormItemLayout} style={{ marginBottom: 0 }}>
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ProductVariantAdd;
