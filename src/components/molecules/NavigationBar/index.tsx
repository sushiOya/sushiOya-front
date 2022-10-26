import { styles } from './index.style';

const NavigationBar = () => {
  return (
    <div css={styles.container}>
      <div>
        <div>Icon</div>
        <h2 css={styles.title}>홈</h2>
      </div>
      <div>
        <div>Icon</div>
        <h2>리스트</h2>
      </div>
      <div>
        <div>Icon</div>
        <h2>커뮤니티</h2>
      </div>
      <div>
        <div>Icon</div>
        <h2>마이페이지</h2>
      </div>
    </div>
  );
};

export default NavigationBar;
