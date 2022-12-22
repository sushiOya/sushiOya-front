import MainPage from '../components/pages/MainPage';
import { getNavibarLayout } from '../components/templates/NavibarLayout/getNavibarLayout';
import { NextPageWithLayout } from '../types/layout';

const Page: NextPageWithLayout = () => {
  return <MainPage />;
};

Page.Layout = getNavibarLayout();

export default Page;
