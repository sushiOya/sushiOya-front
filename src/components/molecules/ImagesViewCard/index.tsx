import { Restaurant } from '../../../pages';
import Text, { FONT_WEIGHT, TEXT } from '../../atoms/Text';
import Title, { TITLE } from '../../atoms/Title';
import BookMarkImageView from '../BookmarkImageView';
import Card from '../Card';

type Props = {
  restaurant: Restaurant;
};

const ImageViewCard = ({
  restaurant: { name, location, imagePath },
}: Props): JSX.Element => {
  return (
    <Card>
      <BookMarkImageView
        marked={false}
        onBookmarkClicked={(): void => {
          /* noop */
        }}
        alt={'sushi'}
        imagePath={imagePath}
      />
      <Title as={TITLE.H4}>{name}</Title>
      <Text as={TEXT.BODY1} styleProps={{ fontWeight: FONT_WEIGHT.REGULAR }}>
        {location}
      </Text>
    </Card>
  );
};

export default ImageViewCard;
