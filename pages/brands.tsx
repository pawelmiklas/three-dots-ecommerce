import React from 'react';
import Layout from '@components/Layout/Layout';
import { useStore } from 'store';
import { Brand } from 'mock/brands';
import { useRouter } from 'next/router';
import { filtering } from '@components/Products/Filters/helper';
import { products } from 'mock/products';
import classes from './Brand.module.scss';

const Brands = () => {
  const router = useRouter();
  const store = useStore();
  const brands: Brand[] | null = useStore().brands;
  console.log('brands', brands);
  return (
    <Layout>
      <div className={classes.main}>
        {brands &&
          brands.map(item => {
            return (
              <div
                className={classes.element}
                onClick={() => {
                  store.setupBrandFilter([item.id]);
                  filtering(store, products);
                  router.push(`shoes/brand-${item.id}`);
                }}
                key={item.id}
              >
                <img src={item.logo}></img>
              </div>
            );
          })}
      </div>
    </Layout>
  );
};

export default Brands;
