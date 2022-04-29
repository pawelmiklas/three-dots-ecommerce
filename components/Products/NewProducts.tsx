import { Badge, Col, Row } from 'antd';
import { Product } from 'mock/products';
import { useStore } from 'store';
import classes from './NewProducts.module.scss';
import ProductShowcase from './ProductShowcase';

const NewProducts = () => {
  const store = useStore();
  const currency = 'Eur';
  const quantityProducts: number = 4;
  const ribbonText: string = 'New products';
  const products: Product[] = store.products.slice(0, quantityProducts);

  return (
    <div>
      <Badge.Ribbon text={ribbonText} placement="start" className={classes.ribbon} />
      <Row style={{ paddingTop: '4rem' }} gutter={[50, 50]}>
        {products.map(item => {
          return (
            <Col span={6} key={item.key}>
              <ProductShowcase item={item} currency={currency} onsale={false} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default NewProducts;
