import { Carousel } from 'antd';
import React from 'react';
import PromotedProduct from './PromotedProduct';
import classes from './Carousel.module.scss';

// const contentStyle: React.CSSProperties = {
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };

const PromotedCarousel = () => {
  return (
    <>
      <Carousel dotPosition={'left'} className={classes.main}>
        <div>
          <PromotedProduct />
        </div>
        <div>
          <PromotedProduct />
        </div>
        <div>
          <PromotedProduct />
        </div>
        <div>
          <PromotedProduct />
        </div>
      </Carousel>
    </>
  );
};

export default PromotedCarousel;
