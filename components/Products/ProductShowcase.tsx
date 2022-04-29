import classes from './ProductShowcase.module.scss';

import { Row, Col, Button, Divider } from 'antd';
import { Product } from 'mock/products';
import { ShoppingOutlined } from '@ant-design/icons';

import Image from 'next/image';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import { useRouter } from 'next/router';

const ProductShowcase = ({
  item,
  currency,
  onsale,
  imagewidth = 330,
  imageheight = 227,
}: {
  item: Product;
  currency: string;
  onsale: boolean;
  imagewidth?: number;
  imageheight?: number;
}) => {
  const { name, price, image, discount, key } = item;
  const router = useRouter();
  console.log('item', item);
  return (
    <div className={classes.product} onClick={() => router.push(`/products/${key}`)}>
      <Row>
        <Image src={image} height={imageheight} width={imagewidth} />
      </Row>
      <Row>
        <Title level={5}>{name}</Title>
      </Row>
      <Row justify="space-between">
        {onsale === false ? (
          <Col>
            <Text strong>
              {price} {currency.toUpperCase()}
            </Text>
          </Col>
        ) : (
          <Col>
            <Text delete>
              {price} {currency.toUpperCase()}
            </Text>
            <Divider type="vertical" />
            <Text type="danger">
              {(price - discount).toFixed(1)} {currency.toUpperCase()}
            </Text>
          </Col>
        )}
        <Col>
          <Button size="middle" type="primary" className={classes.button} icon={<ShoppingOutlined />} />
        </Col>
      </Row>
    </div>
  );
};

export default ProductShowcase;
