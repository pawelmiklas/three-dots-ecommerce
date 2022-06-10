import { Row, Col, Card } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import classes from './Cart.module.scss';
import { useStore } from 'store';
import { useEffect, useState } from 'react';
import router from 'next/router';

const Cart = () => {
  const store = useStore();
  const [totalCost, setTotalCost] = useState<number>(0);
  const currency: string = 'EUR';

  useEffect(() => {
    setTotalCost(0);
    store.cart.forEach(item => setTotalCost(prev => prev + item.price * (item.quantity || 1)));
  }, [store]);

  return (
    <div onClick={() => router.push('/cart')}>
      <Card className={classes.card} size="small">
        <Row align="middle" gutter={[8, 0]}>
          <Col>
            <span style={{ fontSize: 16, fontWeight: 'bold' }}>
              {totalCost.toFixed(1)} {currency}
            </span>
          </Col>
          <Col>
            <ShoppingCartOutlined style={{ fontSize: 28 }} />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Cart;
