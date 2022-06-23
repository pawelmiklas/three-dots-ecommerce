import Text from 'antd/lib/typography/Text';
import classes from './TopBar.module.scss';
import { Row, Col } from 'antd';
import { useRouter } from 'next/router';
import Rbac from '@components/Rbac/Rbac';
import { UserRoles } from '@constants/userRoles';
import { removeCookies } from 'cookies-next';
import { Cookies } from '@constants/cookies';

const TopBar = () => {
  const router = useRouter();
  const freeShipping = 120;
  const leftSide = [
    {
      name: '[ We ship internationally ]',
      path: '',
    },
    {
      name: `[ Free  Europe delivery over ${freeShipping} EUR ]`,
      path: '',
    },
  ];
  const rightSide = [
    {
      name: '[ Login ]',
      path: '/login',
    },
    {
      name: `[ Register ]`,
      path: '/registration',
    },
  ];

  return (
    <>
      <Row justify="space-between">
        <Col span={16}>
          <Row justify="start">
            <Col>
              {leftSide.map(({ name }) => (
                <span key={name}>
                  <Text code>{name}</Text>
                </span>
              ))}
            </Col>
          </Row>
        </Col>
        <Rbac roles={[]}>
          <Col span={8}>
            <Row justify="end">
              <Col>
                {rightSide.map(({ name, path }) => (
                  <span className={classes.link} key={name} onClick={() => router.push(path)}>
                    <Text code>{name}</Text>
                  </span>
                ))}
              </Col>
            </Row>
          </Col>
        </Rbac>
        <Rbac roles={[UserRoles.ROLE_ADMIN]}>
          <Col span={8}>
            <Row justify="end">
              <Col>
                <span className={classes.link} onClick={() => router.push('/dashboard/stats')}>
                  <Text code>Dashboard</Text>
                </span>
              </Col>
            </Row>
          </Col>
        </Rbac>
        <Rbac roles={[UserRoles.ROLE_ADMIN, UserRoles.ROLE_CLIENT]}>
          <Col span={8}>
            <Row justify="end">
              <Col>
                <span
                  className={classes.link}
                  onClick={() => {
                    removeCookies(Cookies.THREE_DOTS_AUTH_TOKEN, {
                      path: '/',
                      sameSite: 'strict',
                      maxAge: 60 * 6 * 24,
                    });
                    router.push('/');
                  }}
                >
                  <Text code>Logout</Text>
                </span>
              </Col>
            </Row>
          </Col>
        </Rbac>
      </Row>
    </>
  );
};

export default TopBar;
