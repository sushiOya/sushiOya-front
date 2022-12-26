import MainPage from '../components/pages/MainPage';
import { getNavibarLayout } from '../components/templates/NavibarLayout/getNavibarLayout';
import { NextPageWithLayout } from '../types/layout';

export interface Restaurant {
  name: string;
  imagePath: string;
  location: string;
}

const restaurants: Restaurant[] = [
  {
    name: '스시오야',
    imagePath: '',
    location: '서울시',
  },
  {
    name: '스시오야',
    imagePath: '',
    location: '서울시',
  },
  {
    name: '스시오야',
    imagePath: '',
    location: '서울시',
  },
  {
    name: '스시오야',
    imagePath: '',
    location: '서울시',
  },
  {
    name: '스시오야',
    imagePath: '',
    location: '서울시',
  },
  {
    name: '스시오야',
    imagePath: '',
    location: '서울시',
  },
  {
    name: '스시오야',
    imagePath: '',
    location: '서울시',
  },
  {
    name: '스시오야',
    imagePath: '',
    location: '서울시',
  },
  {
    name: '스시오야',
    imagePath: '',
    location: '서울시',
  },
  {
    name: '스시오야',
    imagePath: '',
    location: '서울시',
  },
];

const Page: NextPageWithLayout = () => {
  return <MainPage restaurants={restaurants} />;
};

Page.Layout = getNavibarLayout();

export default Page;
