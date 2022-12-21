import SushiOya from '../../../assets/icons/logo.svg';
import { styles } from './index.styles';

const Logo = () => {
  return (
    <div css={styles.container}>
      <img alt="Logo" src={SushiOya} />
    </div>
  );
};

export default Logo;
