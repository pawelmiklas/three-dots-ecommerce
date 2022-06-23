import { brands } from 'mock/brands';
import classes from './BrandFilter.module.scss';
import { Checkbox } from 'antd';
import Title from 'antd/lib/typography/Title';
import { useStore } from 'store';
import { useState } from 'react';
import { filtering, FilteringCriteria } from './helper';
import Image from 'next/image';

const BrandFilter = ({ id }: { id: string }) => {
  const store = useStore();
  const products = store.products;
  const [filteredCriteria, setFilteredCriteria] = useState<FilteringCriteria>({
    price: [],
    color: [],
    size: [],
    brand: [],
  });

  // store.setupBrandFilter(['2']);
  // console.log('store filters', store.filters);
  // filtering(store, products);
  // useEffect(() => {
  // }, []);
  // const exFil = store.filters.brand;
  // setFilteredCriteria(exFil);
  const onChange = (e: any) => {
    setFilteredCriteria((filteredCriteria.brand = e));
    if (filteredCriteria.brand) {
      store.setupBrandFilter(filteredCriteria.brand);
      filtering(store, products);
    }
  };
  return (
    <div>
      <div className={classes.main}>
        <Title level={5}>Brands:</Title>
        <Checkbox.Group onChange={e => onChange(e)} defaultValue={store.filters.brand}>
          {brands.map((item, index) => {
            return (
              <Checkbox value={item.id} key={index} className={classes.group}>
                <div className={classes.name}>
                  <span>{item.name}</span>
                  <span>
                    <Image src={item.logo} height={20} width={40}></Image>
                  </span>
                </div>
              </Checkbox>
            );
          })}
        </Checkbox.Group>
      </div>
    </div>
  );
};

export default BrandFilter;
