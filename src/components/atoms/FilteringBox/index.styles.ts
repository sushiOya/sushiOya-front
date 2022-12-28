import { css } from '@emotion/react';

export const styles = {
  container: css`
    //background: coral;
    margin-top: 37px;
    margin-left: 6px;
    margin-right: 6px;
    display: flex;
    justify-content: space-evenly;
  `,
  box: css`
    height: 86px;
    flex: 0.31;
    margin-left: 4.5px;
    margin-right: 4.5px;
    border-radius: 10px;
    border: 1px solid white;
    box-shadow: 0 0.5px 5px 1px gray;
    cursor: pointer;
  `,
  bigText: css`
    margin: 8px 0 0 8px;
    color: #23272f;
    font-weight: 700;
    font-size: 16px;
    line-height: 22.4px;
  `,
  smallText: css`
    color: #94a0b8;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    margin-left: 8px;
  `,
};
