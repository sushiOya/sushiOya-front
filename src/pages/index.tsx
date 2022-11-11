import { useState } from 'react';
import Sushi from '../assets/sushi_test.jpeg';
import ImageView from '../components/atoms/ImageView';
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
      <BookMarkImageView
        marked={marked}
        onBookmarkClicked={onBookmarkClicked}
        alt={'sushi'}
        imagePath={Sushi}
      />
      <ImageView alt={'sushi'} imagePath={Sushi} />
    </div>
  );
};

Page.Layout = getNavibarLayout();

export default Page;
