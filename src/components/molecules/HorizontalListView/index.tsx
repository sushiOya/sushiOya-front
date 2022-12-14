import { Restaurant } from '../../../pages';
import Title, { TITLE } from '../../atoms/Title';
import ImageViewCard from '../ImagesViewCard';
import { styles } from './index.styles';

type Props = {
  title?: string;
  restaurants?: Restaurant[];
};

const HorizontalListView = ({
  title = 'ë´ėŠėė',
  restaurants,
}: Props): JSX.Element => {
  return (
    <div css={styles.container}>
      <div css={styles.titleWrapper}>
        <Title as={TITLE.H2}>{title}</Title>
      </div>
      <div css={styles.horizontalList}>
        {restaurants?.map((restaurant, index) => (
          <ImageViewCard
            key={restaurant.name + index.toString()}
            restaurant={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default HorizontalListView;
