import { httpClient } from '@utils/httpClient';
import { Button, Form, Input, InputNumber, message, Modal, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { addMonths } from 'date-fns';
import { useCategories } from 'hooks/api/useCategories';

interface ProductAddProps {
  isModalVisible: boolean;
  onCancel: () => void;
}
const formItemLayout = { labelCol: { xs: { span: 24 } }, wrapperCol: { xs: { span: 24 } } };
const tailFormItemLayout = { wrapperCol: { xs: { span: 24, offset: 0 } } };

const ProductAdd = ({ isModalVisible, onCancel }: ProductAddProps) => {
  const [form] = Form.useForm();
  const { data } = useCategories();

  return (
    <Modal visible={isModalVisible} width={800} footer={null} onCancel={onCancel} title="Add product">
      <Form
        {...formItemLayout}
        form={form}
        name="product"
        initialValues={{
          categoryId: '',
          name: '',
          price: '',
          description: '',
          imgUrl: '',
          discount: '',
        }}
        layout="vertical"
        onFinish={async values => {
          try {
            await httpClient.post('api/admin/products/create', {
              categoryId: values.category,
              name: values.name,
              price: values.price,
              description: values.description,
              imgUrl: JSON.stringify(values.images),
              ...(values.discount && {
                discount: values.discount,
                discountExpirationDate: addMonths(new Date(), 6),
              }),
            });
            message.success('Product has been added successfully!');
            onCancel();
          } catch (error) {
            message.error('Something went wrong!');
          }
        }}
        validateTrigger="onBlur"
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
              message: 'Please input product name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
              message: 'Please input product description!',
            },
          ]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[
            {
              required: true,
              message: 'Please input product price!',
            },
          ]}
          hasFeedback
        >
          <InputNumber
            style={{ width: '100%' }}
            min={1}
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          />
        </Form.Item>
        <Form.Item
          name="discount"
          label="Discount"
          rules={[
            ({ getFieldValue }) => ({
              validator() {
                if (getFieldValue('discount') < getFieldValue('price')) {
                  return Promise.resolve();
                }

                // eslint-disable-next-line prefer-promise-reject-errors
                return Promise.reject('Discount cannot be grater than price');
              },
            }),
          ]}
        >
          <InputNumber style={{ width: '100%' }} min={0} formatter={value => `$ ${value}`} />
        </Form.Item>
        <Form.Item
          name="category"
          label="Category"
          rules={[
            {
              required: true,
              message: 'Please input product category!',
            },
          ]}
        >
          <Select>
            {(data || []).map(item => (
              <Select.Option key={item.id} value={item.id}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
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

export default ProductAdd;
