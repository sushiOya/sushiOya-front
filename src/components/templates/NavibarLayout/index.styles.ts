import { css } from '@emotion/react';

export const styles = {
  containerWrapper: css`
    background-color: #0070f3;
    height: 800px;
    max-width: 360px;
    margin: 0 auto;
    position: relative;
  `,

  container: css`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  `,

  children: css``,

  iconWrapper: css`
    &:hover {
      cursor: pointer;
    }
    width: 90px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      margin-top: 6px;
      font-size: 16px;
    }
  `,

  navibar: css`
    padding: 16px 10px 8px 10px;
    color: #111111;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 480px;
    width: 100%;
    position: absolute;
    background-color: #f8f9fc;
    height: 84px;
    bottom: 0;
  `,

  homeIcon: css``,
};
