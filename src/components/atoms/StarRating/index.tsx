import { useState } from 'react';
import star from '../../../assets/icons/star.svg';
import star_fill from '../../../assets/icons/star_fill.svg';
import { styles } from './index.styles';

type Props = {
  score?: number;
  inReviewPage: boolean;
  width: number;
  height: number;
};

const StarRating = ({
  score = 5,
  inReviewPage = true,
  width = 24,
  height = 24,
}: Props): JSX.Element => {
  const rating = [1, 2, 3, 4, 5];

  const [clicked, setClicked] = useState(0);

  return (
    <div css={styles.container}>
      {rating.map((el) => (
        <button
          css={styles.button}
          onClick={inReviewPage ? () => setClicked(el) : undefined}
          key={el}
        >
          <img
            css={inReviewPage ? styles.inReview : styles.notReview}
            alt="star"
            src={
              inReviewPage
                ? clicked < el
                  ? star
                  : star_fill
                : el > score
                ? star
                : star_fill
            }
            width={width}
            height={height}
          />
        </button>
      ))}
    </div>
  );
};

export default StarRating;
