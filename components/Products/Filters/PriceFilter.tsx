import classes from './PriceFilter.module.scss';
import { Checkbox } from 'antd';
import Title from 'antd/lib/typography/Title';
import { useStore } from 'store';
import { useState } from 'react';
import { filtering, FilteringCriteria } from './helper';

const prices = [
  { label: '< 200', value: 200 },
  { label: '< 400', value: 400 },
  { label: '< 510', value: 510 },
];

const PriceFilter = ({ id }: { id: string }) => {
  const store = useStore();
  const products = store.products.filter(p => p.sex === id);
  const [filteredCriteria, setFilteredCriteria] = useState<FilteringCriteria>({
    price: [],
    color: [],
    size: [],
    brand: [],
  });

  const onChange = (e: any) => {
    setFilteredCriteria((filteredCriteria.price = e));
    if (filteredCriteria.price) {
      store.setupPriceFilter(filteredCriteria.price);
      filtering(store, products);
    }
  };
  return (
    <div className={classes.main}>
      <Title level={5}>Prices:</Title>
      <Checkbox.Group options={prices} onChange={e => onChange(e)} className={classes.group} />
    </div>
  );
};

export default PriceFilter;
