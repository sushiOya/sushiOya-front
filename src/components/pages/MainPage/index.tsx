import Sushi from '../../../assets/sushi_test.jpeg';
import ImageView from '../../atoms/ImageView';
import MainBanner from '../../atoms/MainBanner';
import StarRating from '../../atoms/StarRating';
import Text, { FONT_WEIGHT, TEXT } from '../../atoms/Text';
import Title, { TITLE } from '../../atoms/Title';
import BookMarkImageView from '../../molecules/BookmarkImageView';
import Card from '../../molecules/Card';
import Header from '../../molecules/Header';
import { styles } from './index.styles';

const MainPage = () => {
  return (
    <>
      <Header />
      <MainBanner />
      <div css={styles.bodyWrapper}>
        <div css={styles.recentOmakaseWrapper}>
          <Title as={TITLE.H2}>최근 올라온 오마카세</Title>
        </div>
        <div
          style={{
            display: 'flex',
            overflowX: 'scroll',
            flexWrap: 'nowrap',
            marginBottom: '32px',
          }}
        >
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
        <div css={styles.recentOmakaseWrapper}>
          <Title as={TITLE.H2}>#입문으로 딱인</Title>
        </div>
        <div
          style={{
            display: 'flex',
            overflowX: 'scroll',
            flexWrap: 'nowrap',
            marginRight: '5px',
            marginBottom: '32px',
          }}
        >
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
        <div css={styles.recentOmakaseWrapper}>
          <Title as={TITLE.H2}>#평점 높은</Title>
        </div>
        <div
          style={{
            display: 'flex',
            overflowX: 'scroll',
            flexWrap: 'nowrap',
            marginRight: '5px',
            marginBottom: '32px',
          }}
        >
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
        <div css={styles.recentOmakaseWrapper}>
          <Title as={TITLE.H2}>최근 후기</Title>
        </div>
        <div
          style={{
            display: 'flex',
            overflowX: 'scroll',
            flexWrap: 'nowrap',
            marginRight: '5px',
            marginBottom: '32px',
          }}
        >
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
      </div>
    </>
  );
};

export default MainPage;
