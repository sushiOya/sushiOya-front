import HeaderIcons from '../../atoms/HeaderIcons';
import Logo from '../../atoms/Logo';
import { styles } from './index.styles';

const Header = () => {
  return (
    <div css={styles.container}>
      <Logo />
      <HeaderIcons />
    </div>
  );
};

export default Header;
