import { css } from '@emotion/react';

export const styles = {
  container: css`
    background-color: gray;
    min-height: calc(800px - 84px);
    height: 200vh;
  `,

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
    width: 100%;
    position: fixed;
    background-color: #f8f9fc;
    left: 0;
    bottom: 0;
    height: 84px;
  `,

  homeIcon: css``,
};
