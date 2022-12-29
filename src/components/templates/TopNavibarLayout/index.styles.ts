import { css } from '@emotion/react';

export const styles = {
  containerWrapper: css`
    border: 1px solid rgba(0, 0, 0, 0.3);
    height: 800px;
    max-width: 360px;
    margin: 200px auto;
    position: relative;
    box-sizing: border-box;
  `,

  container: css`
    width: 100%;
    margin-top: 56px;
    height: calc(100% - 56px);
    overflow-y: scroll;
  `,

  topNavibar: css`
    box-sizing: border-box;
    position: absolute;
    top: 0;
    height: 56px;
    width: 100%;
    background-color: #0070f3;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  iconWrapper: css`
    box-sizing: border-box;
    margin: 16px 0 16px 16px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      margin-left: 8px;
    }
  `,
};
