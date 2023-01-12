import RestaurantReviewListPage from '../../components/pages/RestaurantReviewListPage';
import { getTopNavibarLayout } from '../../components/templates/TopNavibarLayout/getTopNavibarLayout';
import { NextPageWithLayout } from '../../types/layout';

const Page: NextPageWithLayout = () => {
  return <RestaurantReviewListPage />;
};

Page.Layout = getTopNavibarLayout();

export default Page;
