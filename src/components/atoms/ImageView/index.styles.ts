import { css } from '@emotion/react';

export const styles = {
  container: css`
    position: relative;
    background-color: #f1f3f9;
    border-radius: 12px;
    width: 140px;
    height: 168px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      border-radius: 12px;
    }
  `,
  logoWrapper: css`
    width: 110px;
    height: 34px;
    background-color: #e1e6ef;
  `,

  // bookmark: css`
  //   margin: 8px 8px;
  //   width: 22px;
  //   height: 22px;
  //   border-radius: 11px;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   position: absolute;
  //   right: 0;
  //   z-index: 10;
  //   background: rgba(255, 255, 255, 0.5);
  // `,
};
