import StoreInfoHeaderIcons from '../../atoms/StoreInfoHeaderIcons';
import { styles } from './index.styles';

const StoreInfoHeader = (): JSX.Element => {
  return (
    <div css={styles.container}>
      <StoreInfoHeaderIcons />
    </div>
  );
};

export default StoreInfoHeader;
