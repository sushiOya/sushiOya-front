import { useState } from 'react';
import Sushi from '../assets/sushi_test.jpeg';
import Text, { FONT_WEIGHT, TEXT } from '../components/atoms/Text';
import Title, { TITLE } from '../components/atoms/Title';
import BookMarkImageView from '../components/molecules/BookmarkImageView';
import Card from '../components/molecules/Card';
import Header from '../components/molecules/Header';
import HeaderTitle from '../components/molecules/HeaderTitle';
import { getNavibarLayout } from '../components/templates/NavibarLayout/getNavibarLayout';
import { NextPageWithLayout } from '../types/layout';

const Page: NextPageWithLayout = () => {
  const [marked, setMarked] = useState(false);

  const onBookmarkClicked = () => {
    setMarked((prev) => !prev);
  };

  return (
    <>
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <HeaderTitle withIcon>
          <Title as={TITLE.H2}>#평점 높은</Title>
        </HeaderTitle>
        <div
          style={{
            display: 'flex',
            overflowX: 'scroll',
            flexWrap: 'nowrap',
            gap: '5px',
          }}
        >
          <Card>
            <BookMarkImageView
              marked={marked}
              onBookmarkClicked={onBookmarkClicked}
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
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <HeaderTitle withIcon={false}>
          <Title as={TITLE.H2}>최근 올라온 오마카세</Title>
        </HeaderTitle>
        <div
          style={{
            display: 'flex',
            overflowX: 'scroll',
            flexWrap: 'nowrap',
            gap: '5px',
          }}
        >
          <Card>
            <BookMarkImageView
              marked={marked}
              onBookmarkClicked={onBookmarkClicked}
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
              marked={marked}
              onBookmarkClicked={onBookmarkClicked}
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
              marked={marked}
              onBookmarkClicked={onBookmarkClicked}
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
              marked={marked}
              onBookmarkClicked={onBookmarkClicked}
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
              marked={marked}
              onBookmarkClicked={onBookmarkClicked}
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
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <HeaderTitle withIcon>
          <Title as={TITLE.H2}>#입문으로 딱인</Title>
          <Text
            as={TEXT.CAPTION}
            styleProps={{ fontWeight: FONT_WEIGHT.REGULAR }}
          >
            0개의 후기
          </Text>
        </HeaderTitle>
        <div
          style={{
            display: 'flex',
            overflowX: 'scroll',
            flexWrap: 'nowrap',
            gap: '5px',
          }}
        >
          <Card>
            <BookMarkImageView
              marked={marked}
              onBookmarkClicked={onBookmarkClicked}
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
        </div>
      </div>
    </>
  );
};

Page.Layout = getNavibarLayout();

export default Page;
