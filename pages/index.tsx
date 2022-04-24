import NewProducts from '@components/Products/NewProducts';
import PromotedProduct from '@components/Products/PromotedProduct';
import SaleProducts from '@components/Products/SaleProducts';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <NewProducts />
      <PromotedProduct />
      <SaleProducts />
    </>
  );
};

export default Home;
