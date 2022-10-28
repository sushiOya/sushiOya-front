import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { NoLayout } from '../components/templates/NoLayout';
import { NextPageWithLayout } from '../types/layout';

const CustomApp = (appProps: AppProps): JSX.Element => {
  const Component: NextPageWithLayout = appProps.Component;
  const Layout = Component.Layout || NoLayout;
  const router = useRouter();

  return (
    <Layout router={router}>
      <Component {...appProps.pageProps} />
    </Layout>
  );
};

export default CustomApp;
