import HeaderIcons from '../../atoms/HeaderIcons';
import Logo from '../../atoms/Logo';
import SearchBar from '../../atoms/SearchBar';
import { styles } from './index.styles';

const Header = (): JSX.Element => {
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
