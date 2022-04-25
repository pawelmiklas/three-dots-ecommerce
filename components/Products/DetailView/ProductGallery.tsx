import classes from './ProductGallery.module.scss';
import { Product } from 'mock/products';
import Image from 'next/image';

type DetailedImages = Product['detailedImages'];

const ProductGallery = ({ items }: { items: DetailedImages }) => {
  return (
    <div className={classes.main}>
      {items.map((item, index) => {
        return (
          <div key={index} className={classes.image}>
            <Image src={item} height={1100} width={1600} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductGallery;
