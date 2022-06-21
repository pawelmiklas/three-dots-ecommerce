import { httpClient } from '@utils/httpClient';
import { Button, Form, Input, message, Modal } from 'antd';

interface ProductCategoryAddEditProps {
  isModalVisible: boolean;
  onCancel: () => void;
  type: 'add' | 'edit';
  category?: { id?: number; name: string };
}

const formItemLayout = { labelCol: { xs: { span: 24 } }, wrapperCol: { xs: { span: 24 } } };
const tailFormItemLayout = { wrapperCol: { xs: { span: 24, offset: 0 } } };

const CategoryAddEdit = ({ isModalVisible, category, onCancel, type }: ProductCategoryAddEditProps) => {
  const [form] = Form.useForm();

  const addCategory = async (values: any) => {
    try {
      await httpClient.post('api/admin/categories/create', { name: values.name });
      message.success('Category has been added successfully!');
      onCancel();
    } catch (error) {
      message.error('Something went wrong!');
    }
  };

  const editCategory = async (values: any) => {
    try {
      await httpClient.put(`api/admin/categories/${category?.id}`, null, {
        params: { id: category?.id, name: values.name },
      });
      message.success('Category has been edited successfully!');
      onCancel();
    } catch (error) {
      message.error('Something went wrong!');
    }
  };

  return (
    <Modal
      visible={isModalVisible}
      width={800}
      footer={null}
      onCancel={onCancel}
      title={type === 'add' ? 'Add product category' : 'Edit product category'}
    >
      <Form
        {...formItemLayout}
        form={form}
        name="category"
        initialValues={{ ...category }}
        layout="vertical"
        onFinish={values => {
          if (type === 'add') {
            addCategory({ ...values });
            onCancel();
          } else if (type === 'edit') {
            editCategory({ ...values });
            onCancel();
          }
        }}
        validateTrigger="onBlur"
      >
        <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please input product name!' }]}>
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

export default CategoryAddEdit;
