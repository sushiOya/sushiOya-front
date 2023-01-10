import { Restaurant } from '../../../pages';
import FilteringBox from '../../atoms/FilteringBox';
import HorizontalDivider from '../../atoms/HorizontalDivider';
import MainBanner from '../../atoms/MainBanner';
import Header from '../../molecules/Header';
import HorizontalListView from '../../molecules/HorizontalListView';
import { styles } from './index.styles';

type Props = {
  restaurants: Restaurant[];
};

const MainPage = ({ restaurants }: Props): JSX.Element => {
  return (
    <>
      <Header />
      <MainBanner />
      <FilteringBox />
      <HorizontalDivider />
      <div css={styles.container}>
        <HorizontalListView
          title={'최근 올라온 오마카세'}
          restaurants={restaurants}
        />
        <HorizontalListView
          title={'#입문으로 딱인'}
          restaurants={restaurants}
        />
        <HorizontalListView title={'#퍙점 높은'} restaurants={restaurants} />
        <HorizontalListView title={'최근 후기'} restaurants={restaurants} />
      </div>
    </>
  );
};

export default MainPage;
