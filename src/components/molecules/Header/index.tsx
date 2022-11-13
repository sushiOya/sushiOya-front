import HeaderIcons from '../../atoms/HeaderIcons';
import Logo from '../../atoms/Logo';
import { styles } from './index.styles';
import SearchBar from '../../atoms/SearchBar';

const Header = () => {
  return (
    <div css={styles.container}>
      <div css={styles.topContents}>
        <Logo />
        <HeaderIcons />
      </div>
      <div css={styles.bottomContents}>
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
