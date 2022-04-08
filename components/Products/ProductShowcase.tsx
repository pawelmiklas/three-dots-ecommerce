import classes from './ProductShowcase.module.scss';

import { Row, Col, Button, Divider} from 'antd';
import { Product } from 'mock/products';
import { ShoppingOutlined } from '@ant-design/icons';

import Image from 'next/image';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';

const ProductShowcase = ({item,currency,onsale}:{item:Product,currency:string,onsale:boolean}) => {
    const {name, price, image, discount} = item
  return (
    <div className={classes.product}>
        <Row><Image src={image} height={227} width={330}/></Row>
        <Row><Title level={5}>{name}</Title></Row>
        <Row justify='space-between'>
          {onsale === false ?
            (<Col><Text strong>{price} {currency.toUpperCase()}</Text></Col>)
            :
            (<Col>
              <Text delete>
                {price} {currency.toUpperCase()}
              </Text>
              <Divider type='vertical'/>
              <Text type="danger">
                {(price - discount).toFixed(1)} {currency.toUpperCase()}
              </Text>
            </Col>) 
          }
            <Col><Button size='middle' type='primary' className={classes.button} icon={<ShoppingOutlined/>}/></Col>
        </Row>
    </div>
  );
};

export default ProductShowcase;
