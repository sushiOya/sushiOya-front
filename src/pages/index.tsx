import { getNavibarLayout } from '../components/templates/NavibarLayout/getNavibarLayout';
import { NextPageWithLayout } from '../types/layout';

const Page: NextPageWithLayout = () => {
  return <div style={{ color: 'black' }}>daum sucks</div>;
};

Page.Layout = getNavibarLayout();

export default Page;
