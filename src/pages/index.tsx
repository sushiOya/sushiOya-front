import ImageView from '../components/atoms/ImageView';
import { getNavibarLayout } from '../components/templates/NavibarLayout/getNavibarLayout';
import { NextPageWithLayout } from '../types/layout';
import Sushi from '/Users/yoongeonung/Code/Toys/omakase-front/src/assets/sushi_test.jpeg';

const Page: NextPageWithLayout = () => {
  return (
    <div
      style={{
        display: 'flex',
        overflowX: 'scroll',
        flexWrap: 'nowrap',
      }}
    >
      <ImageView alt={'sushi'} imagePath={Sushi} />
      <ImageView alt={'sushi'} imagePath={Sushi} />
      <ImageView alt={'sushi'} imagePath={Sushi} />
      <ImageView alt={'sushi'} imagePath={Sushi} />
      <ImageView alt={'sushi'} imagePath={Sushi} />
      <ImageView alt={'sushi'} imagePath={Sushi} />
      <ImageView alt={'sushi'} imagePath={Sushi} />
      <ImageView alt={'sushi'} imagePath={Sushi} />
    </div>
  );
};

Page.Layout = getNavibarLayout();

export default Page;
