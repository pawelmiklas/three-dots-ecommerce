import { Descriptions, Modal, Statistic, Tag } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";
import { Product } from "mock/products";
import React from "react";
import classes from "../Products.module.scss";
import NumberFormat from "react-number-format";

interface ProductViewProps {
  isModalVisible: boolean;
  product: Product;
  onCancel: () => void;
}

const ProductView = ({
  isModalVisible,
  product,
  onCancel,
}: ProductViewProps) => {
  return (
    <Modal
      visible={isModalVisible}
      width={800}
      footer={null}
      onCancel={onCancel}
    >
      <Descriptions title="Product Info" bordered>
        <Descriptions.Item label="Name" span={3}>
          {product.name}
        </Descriptions.Item>
        <Descriptions.Item label="Price">
          <NumberFormat
            value={product.price}
            displayType="text"
            thousandSeparator
            prefix="$"
          />
        </Descriptions.Item>
        <Descriptions.Item label="Discount" span={2}>
          <Statistic
            value={product.discount > 0 ? product.discount : "-"}
            precision={2}
            valueStyle={{ color: product.discount > 0 ? "#3f8600" : "" }}
            prefix={product.discount > 0 ? <ArrowDownOutlined /> : null}
            suffix={product.discount > 0 ? "%" : undefined}
            className={classes.statistics}
          />
        </Descriptions.Item>
        <Descriptions.Item label="Properties" span={3}>
          {product.properties.map((tag: any) => (
            <Tag color="green" key={tag}>
              {tag.toUpperCase()}
            </Tag>
          ))}
        </Descriptions.Item>
        <Descriptions.Item label="Collections" span={3}>
          {product.collections.map((tag: any) => (
            <Tag color="geekblue" key={tag}>
              {tag.toUpperCase()}
            </Tag>
          ))}
        </Descriptions.Item>
      </Descriptions>
    </Modal>
  );
};

export default ProductView;
