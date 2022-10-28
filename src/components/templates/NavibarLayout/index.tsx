import React from 'react';
import CommunityIcon from '../../../assets/icons/community_navi.svg';
import HomeIcon from '../../../assets/icons/home_navi.svg';
import ListIcon from '../../../assets/icons/list_navi.svg';
import MyPage from '../../../assets/icons/mypage_navi.svg';

import { styles } from './index.styles';

type Props = {
  children: React.ReactNode;
};

export const NavibarLayout: React.FC<Props> = (props) => {
  return (
    <div css={styles.container}>
      {props.children}
      <div css={styles.navibar}>
        <div css={styles.iconWrapper}>
          <img css={styles.homeIcon} src={HomeIcon} alt={'home'} />
          <h2>홈</h2>
        </div>
        <div css={styles.iconWrapper}>
          <img css={styles.homeIcon} src={ListIcon} alt={'list'} />
          <h2>리스트</h2>
        </div>
        <div css={styles.iconWrapper}>
          <img css={styles.homeIcon} src={CommunityIcon} alt={'community'} />
          <h2>커뮤니티</h2>
        </div>
        <div css={styles.iconWrapper}>
          <img css={styles.homeIcon} src={MyPage} alt={'mypage'} />
          <h2>마이페이지</h2>
        </div>
      </div>
    </div>
  );
};
