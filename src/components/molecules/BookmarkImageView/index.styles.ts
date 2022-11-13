import { css } from '@emotion/react';

export const styles = {
  container: css`
    position: relative;
  `,

  btn: css`
    width: 24px;
    height: 24px;
    cursor: pointer;
    border: 0;
    background: rgba(0, 0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  bookmark: css`
    position: absolute;
    margin: 8px 8px;
    width: 22px;
    height: 22px;
    border-radius: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0;
    z-index: 10;
    background: rgba(255, 255, 255, 0.5);
  `,
};
