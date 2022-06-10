import { IProductSizes } from 'mock/products';
import { Button, Typography } from 'antd';
import classes from './AvailableSizes.module.scss';

const AvailableSizes = ({ sizes, selectSize }: { sizes: IProductSizes[]; selectSize: (arg: number) => void }) => {
  const { Text } = Typography;
  return (
    <div className={classes.main}>
      <div className={classes.info}>
        <Text>Choose your size:</Text>
        <Text code>Check the sizes breakdown</Text>
      </div>
      <div className={classes.container}>
        {sizes.map((item, index) => {
          return (
            <Button
              disabled={item.onstock === 0}
              key={index}
              type="ghost"
              size="large"
              className={classes.button_sizes}
              onClick={() => selectSize(item.size)}
            >
              {item.size}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default AvailableSizes;
