import ImageView from '../../atoms/ImageView';
import StarRating from '../../atoms/StarRating';
import Text, { TEXT } from '../../atoms/Text';
import { styles } from './index.styles';

const ReviewListCard = () => {
  return (
    <div css={styles.container}>
      <ImageView alt={'kakao'} height={128} width={106} />
      <div css={styles.descContainer}>
        <div css={styles.reviewWrapper}>
          <StarRating inReviewPage={true} />
          <Text as={TEXT.BODY1} styleProps={{}}>
            타이틀
          </Text>
          <Text as={TEXT.BODY3} styleProps={{}}>
            본문입니다. 본문입니다.본문입니다.본문입니다.본문입니다.
            본문입니다.본문입니다.
          </Text>
        </div>
        <div css={styles.caption}>
          <Text as={TEXT.CAPTION} styleProps={{}}>
            USERNAME
          </Text>
          <Text as={TEXT.CAPTION} styleProps={{}}>
            2022.12.31
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ReviewListCard;
