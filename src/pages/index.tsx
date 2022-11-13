import { useState } from 'react';
import Sushi from '../assets/sushi_test.jpeg';
import ImageView from '../components/atoms/ImageView';
import Text, { FONT_WEIGHT, TEXT } from '../components/atoms/Text';
import Title, { TITLE } from '../components/atoms/Title';
import BookMarkImageView from '../components/molecules/BookmarkImageView';
import { getNavibarLayout } from '../components/templates/NavibarLayout/getNavibarLayout';
import { NextPageWithLayout } from '../types/layout';

const Page: NextPageWithLayout = () => {
  const [marked, setMarked] = useState(false);

  const onBookmarkClicked = () => {
    setMarked((prev) => !prev);
  };

  return (
    <div
      style={{
        display: 'flex',
        overflowX: 'scroll',
        flexWrap: 'nowrap',
      }}
    >
      <div>
        <BookMarkImageView
          marked={marked}
          onBookmarkClicked={onBookmarkClicked}
          alt={'sushi'}
          imagePath={Sushi}
        />
        <Title as={TITLE.H1}>업장 이름</Title>
        <Text as={TEXT.BODY1} styleProps={{ fontWeight: FONT_WEIGHT.REGULAR }}>
          서울시
        </Text>
      </div>
      <ImageView alt={'sushi'} imagePath={Sushi} />
    </div>
  );
};

Page.Layout = getNavibarLayout();

export default Page;
