import Image from 'next/image';
import BookMarkNotFill from '../../../assets/icons/bookmark_filled.svg';
import BookMarkFilled from '../../../assets/icons/bookmark_not_fill.svg';
import ImageView from '../../atoms/ImageView';
import { styles } from './index.styles';

type Props = {
  alt: string;
  imagePath: string;
  marked: boolean;
  onBookmarkClicked: () => void;
};

const BookMarkImageView = ({
  alt,
  marked,
  imagePath,
  onBookmarkClicked,
}: Props): JSX.Element => {
  return (
    <div css={styles.container}>
      <div css={styles.bookmark(marked)}>
        <button css={styles.btn} onClick={onBookmarkClicked}>
          <Image
            src={marked ? BookMarkNotFill : BookMarkFilled}
            alt={'bookmark'}
            layout={'fixed'}
            width={12}
            height={12}
            unoptimized
          />
        </button>
      </div>
      <ImageView alt={alt} imagePath={imagePath} />
    </div>
  );
};

export default BookMarkImageView;
