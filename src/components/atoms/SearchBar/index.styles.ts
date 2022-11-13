import { css } from '@emotion/react';

export const styles = {
  container: css`
    display: flex;
    height: 36px;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    border-radius: 6px;
    background-color: #f8f9fc;
  `,
  searchBar: css`
    width: 100%;
    height: 24px;
    text-align: left;
    background-color: transparent;
    margin-left: 11%;
    border: 0;
    color: black;
  `,
  img: css`
    margin-left: 8px;
    position: absolute;
  `,
};