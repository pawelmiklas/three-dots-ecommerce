import classes from './NewProducts.module.scss';

import { Row, Col, Button} from 'antd';
import { Product } from 'mock/products';
import { ShoppingOutlined } from '@ant-design/icons';

import Image from 'next/image';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';

const ProductShowcase = ({item,currency}:{item:Product,currency:string}) => {
    const {name, price, image} = item
  return (
    <>
        <Row><Image src={image} height={227} width={330}/></Row>
        <Row><Title level={5}>{name}</Title></Row>
        <Row justify='space-between'>
            <Col><Text strong>{price} {currency.toUpperCase()}</Text></Col>
            <Col><Button size='middle' type='primary' className={classes.button} icon={<ShoppingOutlined/>}/></Col>
        </Row>
    </>
  );
};

export default ProductShowcase;
