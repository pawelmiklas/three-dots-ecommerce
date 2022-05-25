import { Row, Col } from 'antd';
import { useRouter } from 'next/router';
import classes from './MainMenu.module.scss';

const MainMenu = () => {
  const router = useRouter();

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
