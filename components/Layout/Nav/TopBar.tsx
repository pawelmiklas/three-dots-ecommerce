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
        <Col>
          <Row>
            <Col>
              {leftSide.map(({ name }) => (
                <span key={name}>
                  <Text code>{name}</Text>
                </span>
              ))}
            </Col>
          </Row>
        </Col>
        <Row>
          <Rbac roles={[]}>
            <Row>
              {rightSide.map(({ name, path }) => (
                <span key={name} onClick={() => router.push(path)}>
                  <Text code className={classes.link}>
                    {name}
                  </Text>
                </span>
              ))}
            </Row>
          </Rbac>
          <Rbac roles={[UserRoles.ROLE_ADMIN]}>
            <Row>
              <span onClick={() => router.push('/dashboard/stats')}>
                <Text code className={classes.link}>
                  Dashboard
                </Text>
              </span>
            </Row>
          </Rbac>
          <Rbac roles={[UserRoles.ROLE_ADMIN, UserRoles.ROLE_CLIENT]}>
            <Row>
              <span
                onClick={() => {
                  removeCookies(Cookies.THREE_DOTS_AUTH_TOKEN, {
                    path: '/',
                    sameSite: 'strict',
                    maxAge: 60 * 6 * 24,
                  });
                  router.push('/');
                }}
              >
                <Text code className={classes.link}>
                  Logout
                </Text>
              </span>
            </Row>
          </Rbac>
        </Row>
      </Row>
    </>
  );
};

export default TopBar;
