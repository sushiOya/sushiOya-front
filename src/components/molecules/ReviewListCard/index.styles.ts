import { css } from '@emotion/react';

export const styles = {
  container: css`
    box-sizing: border-box;
    width: 360px;
    height: 191px;
    padding: 24px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  descContainer: css`
    display: flex;
    flex-direction: column;
    margin-left: 14px;
  `,

  reviewWrapper: css`
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    align-items: flex-start;

    div:first-child,
    span {
      margin-bottom: 8px;
    }
  `,

  caption: css`
    display: flex;
    justify-content: space-between;
  `,
};
