import { Cookies } from '@constants/cookies';
import { UserRoles } from '@constants/userRoles';
import { getCookie } from 'cookies-next';
import jwtDecode from 'jwt-decode';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

interface withAuth {
  roles: UserRoles[];
  getServerSideProps?: GetServerSideProps;
}

const withAuth =
  ({ getServerSideProps, roles }: withAuth) =>
  async (ctx: GetServerSidePropsContext) => {
    try {
      const token = getCookie(Cookies.THREE_DOTS_AUTH_TOKEN, { req: ctx.req, res: ctx.res });

      let decodedToken: any;

      if (!!token) {
        decodedToken = jwtDecode(token as string);
      }

      if ((decodedToken && roles.includes(decodedToken?.role)) || (!decodedToken && roles.length === 0)) {
        let result: any = { props: {} };

        if (getServerSideProps) {
          result = await getServerSideProps({ ...ctx });
        }

        return { ...result, props: { ...result.props } };
      }

      return { redirect: { destination: '/', permanent: false } };
    } catch {
      return { props: {} };
    }
  };

export { withAuth };
