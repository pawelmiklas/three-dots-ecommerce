import { Descriptions, Modal, Statistic, Tag } from "antd";
import { ArrowDownOutlined } from "@ant-design/icons";
import { Product } from "mock/products";
import React from "react";
import classes from "../Products.module.scss";
import NumberFormat from "react-number-format";
import { ProductProperty } from "mock/productProperty";
import { Collection } from "mock/collections";

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
      title="Product Info"
    >
      <Descriptions bordered>
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
          {product.properties.map((item: ProductProperty) => (
            <Tag color="green" key={item.value}>
              {item.name.toUpperCase()}
            </Tag>
          ))}
        </Descriptions.Item>
        <Descriptions.Item label="Collections" span={3}>
          {product.collections.map((item: Collection) => (
            <Tag color="geekblue" key={item.key}>
              {item.title.toUpperCase()}
            </Tag>
          ))}
        </Descriptions.Item>
      </Descriptions>
    </Modal>
  );
};

export default ProductView;
