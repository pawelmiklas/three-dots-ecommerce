import NewProducts from '@components/Products/NewProducts';
import PromotedProduct from '@components/Products/PromotedProduct';
import SaleProducts from '@components/Products/SaleProducts';
import Layout from '@components/Layout/Layout';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Layout>
      <NewProducts />
      <PromotedProduct />
      <SaleProducts />
    </Layout>
  );
};

export default Home;
