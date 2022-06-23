import { shoesColors } from 'mock/products';
import classes from './AvailableColors.module.scss';
import { useState } from 'react';
import Title from 'antd/lib/typography/Title';

const AvailableColors = ({
  colors,
  selectColor,
}: {
  colors: shoesColors[];
  selectColor: (arg: shoesColors) => void;
}) => {
  const [selBtn, setSelBtn] = useState<number | null>(null);
  const setClass = (arg: number | null, index: number) => {
    if (typeof arg === 'number') {
      if (arg === index) return classes.active;
      if (arg !== index) return classes.disabled;
    }
    if (!arg) return classes.color;
  };

  return (
    <div className={classes.color_container}>
      <Title level={5}>Available colors:</Title>
      {colors.map((item, index) => {
        return (
          <button
            key={index}
            style={{ backgroundColor: `${item}` }}
            onClick={() => {
              selectColor(item);
              setSelBtn(index);
            }}
            className={setClass(selBtn, index)}
          />
        );
      })}
    </div>
  );
};

export default AvailableColors;
