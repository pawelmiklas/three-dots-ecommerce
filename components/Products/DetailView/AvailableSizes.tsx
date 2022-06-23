import { IProductSizes } from 'mock/products';
import classes from './AvailableSizes.module.scss';
import { useState } from 'react';
import SizeChart from './SizeChart';

const AvailableSizes = ({ sizes, selectSize }: { sizes: IProductSizes[]; selectSize: (arg: number) => void }) => {
  const [selBtn, setSelBtn] = useState<number | null>(null);

  // const selectedButton = useRef<HTMLButtonElement>(null);
  return (
    <div className={classes.main}>
      <SizeChart />
      <div className={classes.container}>
        {sizes.map((item, index) => {
          return (
            <div key={index}>
              <button
                className={selBtn == index ? classes.active : classes.button_sizes}
                onClick={() => {
                  setSelBtn(index);
                  selectSize(item.size);
                }}
              >
                {item.size}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AvailableSizes;
