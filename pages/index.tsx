import Layout from "@components/Layout/Layout";
import NewProducts from "@components/Products/NewProducts";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout>
      <NewProducts/>
    </Layout>
  );
};

export default Home;
