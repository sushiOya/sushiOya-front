import { css } from '@emotion/react';

export const styles = {
  container: css`
    background-color: white;
    max-width: 360px;
    min-height: calc(800px - 84px);
  `,

  navibar: css`
    display: flex;
    width: 100%;
    position: fixed;
    max-width: 360px;
    background-color: green;
    left: 0;
    bottom: 0;
    height: 84px;
  `,
};
