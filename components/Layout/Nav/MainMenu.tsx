import { filtering } from '@components/Products/Filters/helper';
import { Row, Col } from 'antd';
import { products, shoesSex } from 'mock/products';
import { useRouter } from 'next/router';
import { useStore } from 'store';
import classes from './MainMenu.module.scss';

const MainMenu = () => {
  const router = useRouter();
  const store = useStore();

  const Mainmenu = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: "Women's shoes",
      path: '/shoes/women',
    },
    {
      name: "Men's shoes",
      path: '/shoes/men',
    },
    {
      name: "Kid's shoes",
      path: '/shoes/kids',
    },
    {
      name: 'Brands',
      path: '/brands',
    },
    {
      name: 'Sale',
      path: '/sale',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ];

  return (
    <>
      <Row gutter={[30, 0]} justify="end">
        {Mainmenu.map(({ name, path }) => (
          <Col
            title={name}
            key={name}
            onClick={() => {
              if (name === "Women's shoes") {
                store.setupSexFilter([shoesSex.women]);
                filtering(store, products);
              }
              if (name === "Men's shoes") {
                store.setupSexFilter([shoesSex.men]);
                filtering(store, products);
              }
              if (name === "Kid's shoes") {
                store.setupSexFilter([shoesSex.kids]);
                filtering(store, products);
              }
              router.push(path);
            }}
            className={router.pathname === path ? classes.selected : classes.titleContent}
          >
            {name}
          </Col>
        ))}
      </Row>
    </>
  );
};

export default MainMenu;
