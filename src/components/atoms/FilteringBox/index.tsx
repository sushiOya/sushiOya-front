import { styles } from './index.styles';

const FilteringBox = (): JSX.Element => {
  return (
    <>
      <div css={styles.container}>
        <div css={styles.box}>
          <div css={styles.bigText}>{`엔트리`}</div>
          <div css={styles.smallText}>
            <div>{`런치`}</div>
            <div>{`오만원 까지`}</div>
          </div>
        </div>
        <div css={styles.box}>
          <div css={styles.bigText}>{`미들`}</div>
          <div css={styles.smallText}>
            <div>{`런치`}</div>
            <div>{`십만원 까지`}</div>
          </div>
        </div>
        <div css={styles.box}>
          <div css={styles.bigText}>{`하이엔드`}</div>
          <div css={styles.smallText}>
            <div>{`런치`}</div>
            <div>{`십만원 이상`}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilteringBox;
