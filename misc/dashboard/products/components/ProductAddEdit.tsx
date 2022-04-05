import { Button, InputNumber, Form, Input, Modal, Select, message } from "antd";
import { Product } from "mock/products";
import React from "react";
import { useStore } from "store";

interface ProductAddEditProps {
  isModalVisible: boolean;
  onCancel: () => void;
  type: "add" | "edit";
  product?: Product;
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
  },
  wrapperCol: {
    xs: { span: 24 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
  },
};

const ProductAddEdit = ({
  isModalVisible,
  product,
  onCancel,
  type,
}: ProductAddEditProps) => {
  const [form] = Form.useForm();
  const collections = useStore((state) => state.collections);
  const addProduct = useStore((state) => state.addProduct);
  const productProperties = useStore((state) => state.productProperties);

  return (
    <Modal
      visible={isModalVisible}
      width={800}
      footer={null}
      onCancel={onCancel}
      title={type === "add" ? "Add product" : "Edit product"}
    >
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        initialValues={{}}
        layout="vertical"
        onFinish={(values) => {
          if (type === "add") {
            addProduct({
              ...values,
              collections: values.collections.map((item: string) =>
                collections.find((collection) => collection.id === item)
              ),
              properties: values.properties.map((item: string) =>
                productProperties.find((property) => property.value === item)
              ),
            });
            message.success("Product has been added succesfully!");
            onCancel();
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
              message: "Please input product name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[
            {
              required: true,
              message: "Please input product price!",
            },
          ]}
          hasFeedback
        >
          <InputNumber
            style={{ width: "100%" }}
            min={1}
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
          />
        </Form.Item>
        <Form.Item
          name="discount"
          label="Discount"
          rules={[
            {
              required: true,
              message: "Please input product discount!",
            },
          ]}
        >
          <InputNumber
            style={{ width: "100%" }}
            min={0}
            max={99}
            formatter={(value) => `% ${value}`}
          />
        </Form.Item>
        <Form.Item
          name="collections"
          label="Collections"
          rules={[
            {
              required: true,
              message: "Please input product collection!",
            },
          ]}
        >
          <Select mode="multiple">
            {collections.map((item) => (
              <Select.Option key={item.id} value={item.id}>
                {item.title}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="properties"
          label="Properties"
          rules={[
            {
              required: true,
              message: "Please input product properties!",
            },
          ]}
        >
          <Select mode="multiple">
            {productProperties.map((item) => (
              <Select.Option key={item.value} value={item.value}>
                {item.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item {...tailFormItemLayout} style={{ marginBottom: 0 }}>
          <Button type="primary" htmlType="submit">
            {type === "add" ? "Add" : "Save"}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ProductAddEdit;
