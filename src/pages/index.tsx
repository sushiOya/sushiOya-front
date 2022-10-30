// import ImageView from '../components/atoms/ImageView';
import { getNavibarLayout } from '../components/templates/NavibarLayout/getNavibarLayout';
import { NextPageWithLayout } from '../types/layout';
// import Sushi from 'src/assets/sushi_test.jpeg';
import Header from '../components/molecules/Header';

const Page: NextPageWithLayout = () => {
  return (
    <div
      
    >
      <Header />
    </div>
  );
};

Page.Layout = getNavibarLayout();

export default Page;
