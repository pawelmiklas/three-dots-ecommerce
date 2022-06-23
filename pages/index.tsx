import NewProducts from '@components/Products/NewProducts';
import SaleProducts from '@components/Products/SaleProducts';
import Layout from '@components/Layout/Layout';
import type { NextPage } from 'next';
import Carousel from '@components/Products/Carousel';

const Home: NextPage = () => {
  return (
    <Layout>
      <NewProducts />
      <Carousel />
      <SaleProducts />
    </Layout>
  );
};

export default Home;
