import { Row, Col, Card } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import classes from './Cart.module.scss';

const Cart = () => {
  const totalCost: number = 120;
  const currency: string = 'EUR';

  return (
    <div>
      <Card className={classes.card} size="small">
        <Row align="middle" gutter={[8, 0]}>
          <Col>
            <span style={{ fontSize: 16, fontWeight: 'bold' }}>
              {totalCost} {currency}
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
