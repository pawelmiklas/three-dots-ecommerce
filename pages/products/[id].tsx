import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Product, shoesColors } from 'mock/products';
import { useStore } from 'store';
import { Row, Col, Button, Rate, Card, Form, Input, message, Divider } from 'antd';
import { HeartOutlined, ShoppingOutlined } from '@ant-design/icons';
import classes from './SelectedProduct.module.scss';
import Title from 'antd/lib/typography/Title';
import AvailableSizes from '@components/Products/DetailView/AvailableSizes';
import ProductGallery from '@components/Products/DetailView/ProductGallery';
import Layout from '@components/Layout/Layout';
import { Brand } from 'mock/brands';
import ProductImage from './ProductImage';
import AvailableColors from '@components/Products/DetailView/AvailableColors';
import { useReviews } from 'hooks/api/useReviews';
import { Typography } from 'antd';

const SelectedProduct = () => {
  const { Text } = Typography;
  const store = useStore();
  const router = useRouter();
  const currency = 'EUR';
  const { id } = router.query;
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [selectedSize, setSelectedSize] = useState<number>();
  const [selectedColor, setSelectedColor] = useState<shoesColors>();
  const [rate, setRate] = useState<number>(2);
  const reviews = useReviews(id as string);

  const showDisountPrice = ({ price, discount }: { price: number; discount: number }) => {
    return (
      <Col>
        <Text delete>
          {price} {currency.toUpperCase()}
        </Text>
        <Divider type="vertical" />
        <Text type="danger">
          {(price - discount).toFixed(1)} {currency.toUpperCase()}
        </Text>
      </Col>
    );
  };

  const submitComment = async ({ review, rating }: { review: string; rating: number }) => {
    const bodyData = {
      content: review,
      rating: rating,
    };
    JSON.stringify(bodyData);
    const sendComment = await fetch(`http://localhost:8080/api/user/products/${id}/reviews/create/?userId=100`, {
      method: 'POST',
      body: JSON.stringify(bodyData),
      headers: { 'Content-Type': 'application/json' },
    });
    if (sendComment.ok) {
      reviews.mutate();
      return message.success('Review Added');
    }
    message.error('Error during operation');
  };

  const somethingMissing = (att: string) => {
    message.error(`Please choose ${att} to add product to the cart`);
  };

  const productAdded = () => {
    message.success(`Product has been added to the cart`);
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
              {selectedProduct.onsale
                ? showDisountPrice({ price: selectedProduct.price, discount: selectedProduct.discount })
                : selectedProduct.price}{' '}
              {currency}
            </Title>
            <ProductImage url={selectedBrand.logo} />
            <AvailableSizes sizes={selectedProduct.sizes} selectSize={setSelectedSize} />
            <AvailableColors colors={selectedProduct.colors} selectColor={setSelectedColor} />
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
                    productAdded();
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
                  <Rate defaultValue={2} onChange={e => setRate(e)} count={4} />
                  <Form
                    onSubmitCapture={e => {
                      if (rate) {
                        //@ts-ignore
                        submitComment({ review: e.target[0].value, rating: rate! });
                      } else {
                        message.error('Please set rate');
                      }
                    }}
                  >
                    <Form.Item label="Comment">
                      <Input.TextArea />
                    </Form.Item>
                    <Button block type="primary" htmlType="submit" size="large" className={classes.button}>
                      Submit
                    </Button>
                  </Form>
                  <div>
                    <span>Latest reviews:</span>
                    {(reviews.data || []).map(
                      (
                        item: {
                          rating: number | undefined;
                          content:
                            | boolean
                            | React.ReactChild
                            | React.ReactFragment
                            | React.ReactPortal
                            | null
                            | undefined;
                        },
                        index: React.Key | null | undefined,
                      ) => {
                        console.log(item);
                        return (
                          <div key={index} className={classes.reviews}>
                            <Rate value={item.rating} disabled count={4} />
                            <Text code>{item.content}</Text>
                          </div>
                        );
                      },
                    )}
                  </div>
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
