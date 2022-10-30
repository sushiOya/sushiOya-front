import Header from '../components/molecules/Header';
import { getNavibarLayout } from '../components/templates/NavibarLayout/getNavibarLayout';
import { NextPageWithLayout } from '../types/layout';

const Page: NextPageWithLayout = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

Page.Layout = getNavibarLayout();

export default Page;
