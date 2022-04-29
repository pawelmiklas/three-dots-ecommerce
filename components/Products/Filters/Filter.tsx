import { Product, shoesColors, existingSizes } from 'mock/products';
import { brands } from 'mock/brands';
import classes from './Filter.module.scss';
import { Checkbox } from 'antd';
import Title from 'antd/lib/typography/Title';
// import { useState } from 'react';

export interface FilteringCriteria {
  price?: number[];
  color?: string[];
  onsale?: boolean;
  size?: number[];
  brand?: string[];
}

const Filter = ({ items, setFilters }: { items: Product[]; setFilters: (arg: FilteringCriteria) => void }) => {
  const colors = Object.values(shoesColors);
  //   const [filteredCriteria, setFilteredCriteria] = useState<FilteringCriteria>({
  //     price: [],
  //     color: [],
  //     onsale: false,
  //     size: [],
  //     brand: [],
  //   });

  const onChange = (e: any) => {
    // const name: string = e.target.name;
    // if (e.target.checked) {
    //   if (name === 'onsale') {
    //     filteredCriteria[name] = true;
    //   } else {
    //     filteredCriteria[name].push(e.target.value);
    //   }
    // } else {
    //   if (e.target.name === 'onsale') {
    //     filteredCriteria[name] = false;
    //   } else {
    //     const state = filteredCriteria[e.target.name].filter(element => {
    //       return element !== e.target.value;
    //     });
    //     filteredCriteria[e.target.name] = state;
    //   }
    // }
    // setFilters(filteredCriteria);
  };
  //DO PRZEPISANIA - ROBIONE NA SZYBKO
  return (
    <div>
      <div>
        <Title level={5}>Prices:</Title>
        <div className={classes.prices}>
          <Checkbox name="price" value={50} style={{ marginLeft: '8px' }} onChange={onChange}>
            {'< 50 EUR'}
          </Checkbox>
          <Checkbox name="price" value={75} onChange={onChange}>
            {'< 75 EUR'}
          </Checkbox>
          <Checkbox name="price" value={150} onChange={onChange}>
            {'< 150 EUR'}
          </Checkbox>
          <Checkbox name="price" value={450} onChange={onChange}>
            {'< 450 EUR'}
          </Checkbox>
        </div>
      </div>

      <div>
        <Title level={5}>Colors:</Title>
        <div className={classes.colors__container}>
          {colors.map((item, index) => {
            return (
              <Checkbox name="color" value={item} onChange={onChange} key={index}>
                <button key={index} style={{ backgroundColor: `${item}` }} className={classes.color} />
              </Checkbox>
            );
          })}
        </div>
      </div>
      <div>
        <Title level={5}>On Sale:</Title>
        <Checkbox name="onsale" onChange={onChange}>
          Show products on sale
        </Checkbox>
      </div>
      <div>
        <Title level={5}>Sizes:</Title>
        <div className={classes.colors__container}>
          {existingSizes.map((item, index) => {
            return (
              <Checkbox name="size" value={item} onChange={onChange} key={index}>
                <div key={index} className={classes.sizes}>
                  {item}
                </div>
              </Checkbox>
            );
          })}
        </div>
      </div>
      <div>
        <Title level={5}>Brands:</Title>
        <div className={classes.colors__container}>
          {brands.map((item, index) => {
            return (
              <Checkbox name="brand" value={item.name} onChange={onChange} key={index}>
                <div key={index}>{item.name}</div>
              </Checkbox>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Filter;
