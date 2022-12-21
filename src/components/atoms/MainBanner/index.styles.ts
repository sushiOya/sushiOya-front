import { css } from '@emotion/react';
import SushiOyaBannerImage from '../../../assets/icons/main_banner.svg';

export const styles = {
  container: css`
    box-sizing: border-box;
    height: 164px;
    width: 360px;
    padding: 24px 0 32px 16px;
    background-image: ${`url(${SushiOyaBannerImage})`};
  `,

  bannerText: css`
    p {
      font-size: 20px;
      font-weight: 700;
      line-height: 28px;
      white-space: pre-wrap;
      color: white;
      margin-bottom: 19px;
    }
  `,

  survey: css`
    width: 113px;
    height: 33px;
    border-radius: 8px;
    border: 1px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    span {
      color: white;
      font-size: 12px;
    }
  `,
};
