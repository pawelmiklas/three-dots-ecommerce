import { httpClient } from '@utils/httpClient';
import { Button, Form, InputNumber, message, Modal, Select } from 'antd';
import { useProductVariants } from 'hooks/api/useProductVariants';
import { useSizes } from 'hooks/api/useSizes';

interface ProductStockAddProps {
  isModalVisible: boolean;
  productId: number;
  onCancel: () => void;
}
const formItemLayout = { labelCol: { xs: { span: 24 } }, wrapperCol: { xs: { span: 24 } } };
const tailFormItemLayout = { wrapperCol: { xs: { span: 24, offset: 0 } } };

const ProductStockAdd = ({ isModalVisible, productId, onCancel }: ProductStockAddProps) => {
  const { data: sizes } = useSizes();
  const { data: variants } = useProductVariants(productId);
  const [form] = Form.useForm();

  return (
    <Modal visible={isModalVisible} width={800} footer={null} onCancel={onCancel} title="Add product stock">
      <Form
        {...formItemLayout}
        form={form}
        name="product"
        initialValues={{ size: '', variant: '', amount: '' }}
        layout="vertical"
        onFinish={async values => {
          try {
            await httpClient.post('api/admin/stocks/create', {
              amount: values.amount,
              variantId: values.variant,
              sizeId: values.size,
            });
            message.success('Stock has been added successfully!');
            onCancel();
          } catch (error) {
            message.error('Something went wrong!');
          }
        }}
        validateTrigger="onBlur"
      >
        <Form.Item
          name="amount"
          label="Amount"
          rules={[
            {
              required: true,
              message: 'Please input amount!',
            },
          ]}
          hasFeedback
        >
          <InputNumber style={{ width: '100%' }} min={1} />
        </Form.Item>
        <Form.Item
          name="size"
          label="Size"
          rules={[
            {
              required: true,
              message: 'Please input product size!',
            },
          ]}
        >
          <Select>
            {(sizes || []).map(item => (
              <Select.Option key={item.id} value={item.id}>
                {item.sizeLabel}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="variant"
          label="Variant"
          rules={[
            {
              required: true,
              message: 'Please input product variant!',
            },
          ]}
        >
          <Select>
            {(variants?.variants || []).map(item => (
              <Select.Option key={item.variantId} value={item.variantId}>
                {item.color}
              </Select.Option>
            ))}
          </Select>
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

export default ProductStockAdd;
