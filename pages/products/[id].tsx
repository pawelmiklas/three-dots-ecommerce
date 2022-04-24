import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Product } from 'mock/products';
import { useStore } from 'store';
import { Row, Col, Button, Rate, Card, Form, Input } from 'antd';
import { HeartOutlined, ShoppingOutlined } from '@ant-design/icons';
import classes from './SelectedProduct.module.scss';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import AvailableSizes from '@components/Products/DetailView/AvailableSizes';
import ProductGallery from '@components/Products/DetailView/ProductGallery';

const SelectedProduct = () => {
  const store = useStore();
  const router = useRouter();
  const productId = router.query.toString();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const currency = 'EUR';

  useEffect(() => {
    const product = store.products.find(item => (item.key = productId));
    if (product) setSelectedProduct(product);
  }, []);
  return (
    <>
      {selectedProduct && (
        <Row>
          <Col span={18}>
            <ProductGallery items={selectedProduct.detailedImages} />
          </Col>
          <Col span={6}>
            <Title level={3}>{selectedProduct.name}</Title>
            <Title level={5}>
              {selectedProduct.price} {currency}
            </Title>
            <AvailableSizes sizes={selectedProduct.sizes} />
            <div className={classes.buttons}>
              <Button size="large" type="primary" icon={<ShoppingOutlined />} className={classes.button}>
                Add to cart
              </Button>
              <Button size="large" icon={<HeartOutlined />}>
                Add to favourite
              </Button>
            </div>
            <div className={classes.informations}>
              <div className={classes.description}>
                <Card>
                  <Text>
                    The glow of the classic basketball model does not go out. Combining a comfortable construction
                    currency and an off-court look, this model is a new version of the classic with expressive details
                    that will add to any outfit. Flyknit upper has an intricate texture, is breathable and reimagines
                    the AF1 stylus.
                  </Text>
                </Card>
              </div>
              <div>
                <Card title="Free shipping and returns">
                  <Text>
                    <p>Free standard shipping starts from 100 EUR.</p>
                    <p>You can report for the performance of the product without repair within 60 days.</p>
                  </Text>
                </Card>
              </div>
              <div>
                <Card title="Rate item and leave comment">
                  <Rate allowHalf defaultValue={2.5} />
                  <Form>
                    <Form.Item label="Comment">
                      <Input.TextArea />
                    </Form.Item>
                    <Button block type="primary" htmlType="submit" size="large" className={classes.button}>
                      Submit
                    </Button>
                  </Form>
                </Card>
              </div>
            </div>
          </Col>
        </Row>
      )}
    </>
  );
};

export default SelectedProduct;
