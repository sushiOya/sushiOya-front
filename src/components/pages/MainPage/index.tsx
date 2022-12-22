import Sushi from '../../../assets/sushi_test.jpeg';
import ImageView from '../../atoms/ImageView';
import MainBanner from '../../atoms/MainBanner';
import StarRating from '../../atoms/StarRating';
import Text, { FONT_WEIGHT, TEXT } from '../../atoms/Text';
import Title, { TITLE } from '../../atoms/Title';
import BookMarkImageView from '../../molecules/BookmarkImageView';
import Card from '../../molecules/Card';
import Header from '../../molecules/Header';

const MainPage = () => {
  return (
    <>
      <Header />
      <MainBanner />
      <div>
        <Title as={TITLE.H2}>최근 올라온 오마카세</Title>
      </div>
      <div
        style={{
          display: 'flex',
          overflowX: 'scroll',
          flexWrap: 'nowrap',
          gap: '5px',
        }}
      >
        <div></div>
        <Card>
          <BookMarkImageView
            marked={false}
            onBookmarkClicked={() => {}}
            alt={'sushi'}
            imagePath={Sushi}
          />
          <Title as={TITLE.H4}>업장 이름</Title>
          <Text
            as={TEXT.BODY1}
            styleProps={{ fontWeight: FONT_WEIGHT.REGULAR }}
          >
            서울시
          </Text>
        </Card>
        <Card>
          <BookMarkImageView
            marked={false}
            onBookmarkClicked={() => {}}
            alt={'sushi'}
            imagePath={Sushi}
          />
          <Title as={TITLE.H4}>업장 이름</Title>
          <Text
            as={TEXT.BODY1}
            styleProps={{ fontWeight: FONT_WEIGHT.REGULAR }}
          >
            서울시
          </Text>
        </Card>
        <Card>
          <BookMarkImageView
            marked={true}
            onBookmarkClicked={() => {}}
            alt={'sushi'}
            imagePath={Sushi}
          />
          <Title as={TITLE.H4}>업장 이름</Title>
          <Text
            as={TEXT.BODY1}
            styleProps={{ fontWeight: FONT_WEIGHT.REGULAR }}
          >
            서울시
          </Text>
        </Card>
        <Card>
          <ImageView alt={'sushi'} imagePath={Sushi} />
          <Title as={TITLE.H4}>업장 이름</Title>
          <Text
            as={TEXT.BODY1}
            styleProps={{ fontWeight: FONT_WEIGHT.REGULAR }}
          >
            서울시
          </Text>
        </Card>
        <StarRating inReviewPage={true} width={24} height={24} />
      </div>
    </>
  );
};

export default MainPage;
