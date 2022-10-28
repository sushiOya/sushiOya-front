import React from 'react';
import { styles } from './index.styles';

type Props = {
  children: React.ReactNode;
};

export const NavibarLayout: React.FC<Props> = (props) => {
  return (
    <div css={styles.container}>
      {props.children}
      <div css={styles.navibar}>
        <div>
          <div>Icon</div>
          <h2>홈</h2>
        </div>
        <div>
          <div>Icon</div>
          <h2>리스트</h2>
        </div>
        <div>
          <div>Icon</div>
          <h2>커뮤니티</h2>
        </div>
        <div>
          <div>Icon</div>
          <h2>마이페이지</h2>
        </div>
      </div>
    </div>
  );
};
