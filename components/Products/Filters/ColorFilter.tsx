import { shoesColors } from 'mock/products';
import classes from './ColorFilter.module.scss';
import { Checkbox } from 'antd';
import Title from 'antd/lib/typography/Title';
import { useStore } from 'store';
import { useState } from 'react';
import { filtering, FilteringCriteria } from './helper';

const ColorFilter = ({ id }: { id: string }) => {
  const store = useStore();
  const colors = Object.values(shoesColors);
  const products = store.products;
  const [filteredCriteria, setFilteredCriteria] = useState<FilteringCriteria>({
    price: [],
    color: [],
    size: [],
    brand: [],
  });

  const onChange = (e: any, value: string) => {
    filteredCriteria.color = e;
    setFilteredCriteria((filteredCriteria.color = e));
    if (filteredCriteria.color) {
      store.setupColorFilter(filteredCriteria.color);
      filtering(store, products);
    }
  };
  return (
    <div>
      <div className={classes.main}>
        <Title level={5}>Colors:</Title>
        <Checkbox.Group onChange={e => onChange(e, 'color')} value={store.filters.color}>
          {colors.map((item, index) => {
            return (
              <Checkbox value={item} key={index} className={classes.group}>
                <div style={{ backgroundColor: `${item}` }} className={classes.color} />
              </Checkbox>
            );
          })}
        </Checkbox.Group>
      </div>
    </div>
  );
};

export default ColorFilter;
