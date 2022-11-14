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
  score = 4.5,
  inReviewPage = true,
  width = 24,
  height = 24,
}: Props): JSX.Element => {
  const Rating = [1, 2, 3, 4, 5];

  const [clicked, setClicked] = useState(0);

  if (inReviewPage) {
    return (
      <div css={styles.container}>
        {Rating.map((el) => (
          <img
            css={styles.inReview}
            alt="star"
            src={clicked < el ? star : star_fill}
            width={width}
            height={height}
            key={el}
            onClick={() => setClicked(el)}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div css={styles.container}>
        {Rating.map((el) => (
          <img
            css={styles.notReview}
            alt="star"
            src={el >= score ? star : star_fill}
            width={width}
            height={height}
            key={el}
          />
        ))}
      </div>
    );
  }
};

export default StarRating;
