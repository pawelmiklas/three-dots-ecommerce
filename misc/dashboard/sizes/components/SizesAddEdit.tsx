import { httpClient } from '@utils/httpClient';
import { Button, Form, Input, message, Modal } from 'antd';

interface SizesAddProps {
  isModalVisible: boolean;
  onCancel: () => void;
  size?: { sizeLabel: string };
}

const formItemLayout = { labelCol: { xs: { span: 24 } }, wrapperCol: { xs: { span: 24 } } };
const tailFormItemLayout = { wrapperCol: { xs: { span: 24, offset: 0 } } };

const SizesAddEdit = ({ isModalVisible, size, onCancel }: SizesAddProps) => {
  const [form] = Form.useForm();

  const addCategory = async (values: any) => {
    try {
      await httpClient.post('api/admin/sizes/create', { sizeLabel: values.sizeLabel });
      message.success('Size has been added successfully!');
      onCancel();
    } catch (error) {
      message.error('Something went wrong!');
    }
  };

  return (
    <Modal visible={isModalVisible} width={800} footer={null} onCancel={onCancel} title="Add product size">
      <Form
        {...formItemLayout}
        form={form}
        name="size"
        initialValues={{ ...size }}
        layout="vertical"
        onFinish={values => {
          addCategory({ ...values });
          onCancel();
        }}
        validateTrigger="onBlur"
      >
        <Form.Item name="sizeLabel" label="Size" rules={[{ required: true, message: 'Please input name!' }]}>
          <Input />
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

export default SizesAddEdit;
