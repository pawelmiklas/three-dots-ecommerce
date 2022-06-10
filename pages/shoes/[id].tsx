/* eslint-disable no-unused-vars */
/* eslint-disable guard-for-in */
import React, { useEffect, useState } from 'react';
import { useStore } from 'store';
import Layout from '@components/Layout/Layout';
import ProductShowcase from '@components/Products/ProductShowcase';
import classes from './ListShoes.module.scss';
import { Product } from 'mock/products';
import ColorFilter from '@components/Products/Filters/ColorFilter';
import PriceFilter from '@components/Products/Filters/PriceFilter';
import SizeFilter from '@components/Products/Filters/SizeFilter';
import BrandFilter from '@components/Products/Filters/BrandFilter';
import { FilteringCriteria } from '@components/Products/Filters/helper';
import { useRouter } from 'next/router';

export const checkFilters = (arg: FilteringCriteria) => {
  if (!arg.price?.length && !arg.color?.length && !arg.brand?.length && !arg.size?.length) {
    console.log('false');
    return false;
  } else {
    return true;
  }
};

const ListShoes = () => {
  const store = useStore();
  const router = useRouter();
  const { id } = router.query;
  const [products, setProducts] = useState<Product[]>();
  useEffect(() => {
    store.resetFilters();
    setProducts(store.products.filter(item => item.sex === id));
    if (products) store.filterProduct(products);
  }, [id]);

  return (
    <Layout>
      <div className={classes.container__main}>
        <div className={classes.container__filters}>
          {id && (
            <>
              <PriceFilter id={id as string} />
              <ColorFilter id={id as string} />
              <SizeFilter id={id as string} />
              <BrandFilter id={id as string} />
            </>
          )}
        </div>
        <div className={classes.container__products}>
          {products &&
            (checkFilters(store.filters) ? store.filteredProducts : products).map(item => {
              return <ProductShowcase item={item} currency={'EUR'} onsale={false} key={item.key} />;
            })}
        </div>
      </div>
    </Layout>
  );
};

export default ListShoes;
