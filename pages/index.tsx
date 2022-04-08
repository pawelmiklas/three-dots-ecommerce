import Layout from "@components/Layout/Layout";
import NewProducts from "@components/Products/NewProducts";
import PromotedProduct from "@components/Products/PromotedProduct";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout>
      <NewProducts/>
      <PromotedProduct/>
    </Layout>
  );
};

export default Home;
