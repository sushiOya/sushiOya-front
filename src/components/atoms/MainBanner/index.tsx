import { styles } from './index.styles';

const MainBanner = (): JSX.Element => {
  return (
    <div css={styles.container}>
      <div css={styles.bannerText}>
        <p>{'설문 참여하고\n오마카세 런치 받아가세요'}</p>
        <div css={styles.survey}>
          <span>{'설문하러가기'}</span>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
