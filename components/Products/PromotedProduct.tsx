import classes from './PromotedProduct.module.scss';

import { Row, Col, Button, Badge, Divider} from 'antd';
import { Product } from 'mock/products';
import { ShoppingOutlined } from '@ant-design/icons';

import Image from 'next/image';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import { useStore } from 'store';

const PromotedProduct = () => {
    
    const store = useStore();
    const promotedProduct:Product | undefined = store.products.find(product => product.promoted === true);
    const promoteSlogan = 'FUTURYSTYCZNE BUTY, KTÓRE PRZENOSZĄ KOMFORT NA NOWY POZIOM.'
    const ribbonText = 'Promoted product'
    const currency = 'eur'

  return (
    <div className={classes.outline}>
        <Badge.Ribbon text={ribbonText} placement='start' className={classes.ribbon}/>
        <Row className={classes.container}>
            { promotedProduct && 
                <>
                    <Col offset={1} span={14} className={classes.image}><Image src={promotedProduct.image} height={596} width={900} quality={100}/></Col>
                    <Col span={8}>
                        <Row className={classes.rowextended}>
                            <Title level={2}>{promotedProduct.name}</Title>
                        </Row>
                        <Row className={classes.row}>
                            <Title level={4}>{promoteSlogan}</Title>
                        </Row>
                        <Row className={classes.row}>
                            <Text>{promotedProduct.description}</Text>
                        </Row>
                        <Divider/>
                        <Row justify='space-between'>
                            <Col><Title level={5}>{promotedProduct.price} {currency.toUpperCase()}</Title></Col>
                            <Col><Button size='large' type='primary' className={classes.button} icon={<ShoppingOutlined/>}/></Col>
                        </Row>
                    </Col>
                </>
            }
        
        </Row>
    </div>
  );
};

export default PromotedProduct;
