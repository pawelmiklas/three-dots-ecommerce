import { Cookies } from '@constants/cookies';
import { UserRoles } from '@constants/userRoles';
import { getCookie } from 'cookies-next';
import jwtDecode from 'jwt-decode';

interface RbacProps {
  roles: UserRoles[];
  children?: JSX.Element;
}

const Rbac = ({ roles, children }: RbacProps) => {
  const token = getCookie(Cookies.THREE_DOTS_AUTH_TOKEN);
  let decodedToken: any;

  if (!!token) {
    decodedToken = jwtDecode(token as string);
  }

  if ((decodedToken && roles.includes(decodedToken?.role)) || (!decodedToken && roles.length === 0)) {
    return children || null;
  }

  return null;
};

export default Rbac;
