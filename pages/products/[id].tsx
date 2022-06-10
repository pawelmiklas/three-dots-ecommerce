import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Product, shoesColors } from 'mock/products';
import { useStore } from 'store';
import { Row, Col, Button, Rate, Card, Form, Input, message } from 'antd';
import { HeartOutlined, ShoppingOutlined } from '@ant-design/icons';
import classes from './SelectedProduct.module.scss';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import AvailableSizes from '@components/Products/DetailView/AvailableSizes';
import ProductGallery from '@components/Products/DetailView/ProductGallery';
import Layout from '@components/Layout/Layout';
import { Brand } from 'mock/brands';
import ProductImage from './ProductImage';

const SelectedProduct = () => {
  const store = useStore();
  const router = useRouter();
  const currency = 'EUR';
  const { id } = router.query;
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [selectedSize, setSelectedSize] = useState<number>();
  const [selectedColor, setSelectedColor] = useState<shoesColors>();

  const somethingMissing = (att: string) => {
    message.error(`Please choose ${att} to add product to cart`);
  };

  useEffect(() => {
    const product = store.products.find(item => item.key === id);
    if (product) {
      setSelectedProduct(product);
      const brand = store.brands.find(item => item.id === product.brand);
      if (brand) setSelectedBrand(brand);
    }
  }, [id]);

  return (
    <Layout>
      {selectedProduct && selectedBrand && (
        <Row>
          <Col span={18}>
            <ProductGallery items={selectedProduct.detailedImages} />
          </Col>
          <Col span={6}>
            <Title level={3}>{selectedProduct.name}</Title>
            <Title level={5}>
              {selectedProduct.price} {currency}
            </Title>
            <ProductImage url={selectedBrand.logo} />
            <AvailableSizes sizes={selectedProduct.sizes} selectSize={setSelectedSize} />
            <div className={classes.color_container}>
              <Title level={5}>Available colors:</Title>
              {selectedProduct.colors.map((item, index) => {
                return (
                  <button
                    key={index}
                    style={{ backgroundColor: `${item}` }}
                    className={classes.color}
                    onClick={() => setSelectedColor(item)}
                  />
                );
              })}
            </div>
            <div className={classes.buttons}>
              <Button
                size="large"
                type="primary"
                icon={<ShoppingOutlined />}
                className={classes.button}
                onClick={() => {
                  if (selectedSize && selectedColor) {
                    store.addToCart({
                      ...selectedProduct,
                      variants: [
                        {
                          size: selectedSize,
                          color: selectedColor,
                        },
                      ],
                      quantity: 1,
                      id: Date.now().toString(),
                    });
                    setSelectedColor(undefined);
                    setSelectedSize(undefined);
                  } else {
                    somethingMissing(selectedSize ? 'color' : 'size');
                  }
                }}
              >
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
    </Layout>
  );
};

export default SelectedProduct;
