import classes from './ProductShowcase.module.scss';

import { Row, Col, Divider } from 'antd';
import { Product } from 'mock/products';
import Image from 'next/image';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import { useRouter } from 'next/router';
import CartModal from '@components/Cart/CartModal';

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
  return (
    <div className={classes.product}>
      <div onClick={() => router.push(`/products/${key}`)} className={classes.productInfo}>
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
        </Row>
      </div>
      <Row>
        <CartModal id={key} />
      </Row>
    </div>
  );
};

export default ProductShowcase;
