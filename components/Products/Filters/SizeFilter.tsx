/* eslint-disable guard-for-in */
import { existingSizes } from 'mock/products';
import classes from './SizeFilter.module.scss';
import { Checkbox } from 'antd';
import Title from 'antd/lib/typography/Title';
import { useStore } from 'store';
import { useState } from 'react';
import { filtering, FilteringCriteria } from './helper';

const SizeFilter = ({ id }: { id: string }) => {
  const store = useStore();
  const products = store.products;
  const [filteredCriteria, setFilteredCriteria] = useState<FilteringCriteria>({
    price: [],
    color: [],
    size: [],
    brand: [],
  });

  const onChange = (e: any) => {
    setFilteredCriteria((filteredCriteria.size = e));
    if (filteredCriteria.size) {
      store.setupSizeFilter(filteredCriteria.size);
      filtering(store, products);
    }
  };
  return (
    <div className={classes.main}>
      <Title level={5}>Sizes:</Title>
      <Checkbox.Group onChange={e => onChange(e)} className={classes.group}>
        {existingSizes.map((item, index) => {
          return (
            <Checkbox value={item} key={index}>
              <div className={classes.sizes}>{item}</div>
            </Checkbox>
          );
        })}
      </Checkbox.Group>
    </div>
  );
};

export default SizeFilter;
