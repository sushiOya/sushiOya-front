import StoreInfoHeader from '../../molecules/StoreInfoHeader';
import { styles } from './index.styles';

const StoreInfoPage = (): JSX.Element => {
  return (
    <div css={styles.container}>
      <StoreInfoHeader />
    </div>
  );
};

export default StoreInfoPage;
