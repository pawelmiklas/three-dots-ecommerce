/* eslint-disable no-unused-vars */
/* eslint-disable guard-for-in */
import React, { useEffect, useState } from 'react';
import { useStore } from 'store';
import Layout from '@components/Layout/Layout';
import ProductShowcase from '@components/Products/ProductShowcase';
import classes from './ListShoes.module.scss';
import { Product, shoesSex } from 'mock/products';
import ColorFilter from '@components/Products/Filters/ColorFilter';
import PriceFilter from '@components/Products/Filters/PriceFilter';
import SizeFilter from '@components/Products/Filters/SizeFilter';
import BrandFilter from '@components/Products/Filters/BrandFilter';
import { FilteringCriteria } from '@components/Products/Filters/helper';
import { useRouter } from 'next/router';
import { useProducts } from 'hooks/api/useProducts';
import { useProductVariants } from 'hooks/api/useProductVariants';
import { useSizes } from 'hooks/api/useSizes';
import { useProductStock } from 'hooks/api/useProductStock';
import { isArray, result } from 'lodash';
import { brands } from 'mock/brands';
import SexFilter from '@components/Products/Filters/SexFilter';

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

  // const productsAll: Product[] | any = useProducts();
  // const [producta, setproducta] = useState();
  // const variantTest = useProductVariants(1);
  // const variantSize = useProductStock(1);

  // useEffect(() => {
  //   console.log(producta);
  //   if (producta) {
  //     store.addProduct(producta);
  //     console.log('added');
  //   }
  // }, [producta]);

  useEffect(() => {
    // store.resetFilters();
    // if (id === 'men' || 'women' || 'kids') {
    //   setProducts(store.products.filter(item => item.sex === id));
    // }
    if (id?.includes('brand')) {
      setProducts(store.products.filter(item => item.brand === (id as string).split('-')[1]));
    }
    // if (products) store.filterProduct(products);
    console.log('Filtered products22', store.filteredProducts);
  }, [id]);

  return (
    <Layout>
      <div className={classes.container__main}>
        <div className={classes.container__filters}>
          {id && (
            <>
              <SexFilter id={id as string} />
              <PriceFilter id={id as string} />
              <ColorFilter id={id as string} />
              <SizeFilter id={id as string} />
              <BrandFilter id={id as string} />
            </>
          )}
        </div>
        <div>
          <div className={classes.container__products}>
            {(store.filteredProducts ?? products).map(item => {
              return <ProductShowcase item={item} currency={'EUR'} onsale={false} key={item.key} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ListShoes;
