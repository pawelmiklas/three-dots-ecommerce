import classes from './NewProducts.module.scss';

import { Row, Col, Button} from 'antd';
import { Badge} from 'antd';
import { useStore } from 'store';
import { Product } from 'mock/products';
import { ShoppingOutlined } from '@ant-design/icons';

import Image from 'next/image';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import ProductShowcase from './ProductShowcase';

const NewProducts = () => {
    const store = useStore();
    const currency = 'Eur'
    const quantityProducts:number = 4;
    const ribbonText:string = 'New products'
    const products:Product[] = store.products.slice(0,quantityProducts);

  return (
    <div>
        <Badge.Ribbon text={ribbonText} placement='start' className={classes.ribbon}/>
            <Row style={{'paddingTop':'4rem'}} gutter={[50,50]}>
                    {
                        products.map((item)=>{
                            return(
                                <Col span={6} key={item.name}>
                                    <ProductShowcase item={item} currency={currency} />
                                </Col>
                            )
                        })
                    }
            </Row>
    </div>
  );
};

export default NewProducts;
