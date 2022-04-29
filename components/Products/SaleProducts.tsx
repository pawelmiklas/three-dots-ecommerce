import { Badge, Col, Row } from 'antd';
import { Product } from 'mock/products';
import { useStore } from 'store';
import ProductShowcase from './ProductShowcase';
import classes from './SaleProducts.module.scss';

const SaleProducts = () => {
  const store = useStore();
  const currency = 'Eur';
  const ribbonText: string = 'Products on sale';
  const products: Product[] = store.products.filter(item => item.onsale === true);

  return (
    <div className={classes.container}>
      <Badge.Ribbon text={ribbonText} placement="start" className={classes.ribbon} />
      <Row style={{ paddingTop: '4rem' }} gutter={[50, 50]}>
        {products.map(item => {
          return (
            <Col span={6} key={item.key}>
              <ProductShowcase item={item} currency={currency} onsale={true} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default SaleProducts;
