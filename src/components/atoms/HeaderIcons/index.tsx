import BellIcon from '../../../assets/icons/bell.svg';
import BookmarkIcon from '../../../assets/icons/bookmark.svg';
import { styles } from './index.styles';

const HeaderIcons = () => {
  return (
    <div css={styles.container}>
      <img
        css={styles.img}
        alt="Bookmark Icon"
        src={BookmarkIcon}
        height="32"
      />
      <img css={styles.img} alt="Header Icon" src={BellIcon} height="32" />
    </div>
  );
};

export default HeaderIcons;
