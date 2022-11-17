import { css } from '@emotion/react';

export const styles = {
  container: css`
    height: 22px;
  `,
  button: css`
    padding: 0;
    margin: 0;
    background: transparent;
    border: none;
  `,
  inReview: css`
    &:hover {
      cursor: pointer;
    }
  `,
  notReview: css``,
};
