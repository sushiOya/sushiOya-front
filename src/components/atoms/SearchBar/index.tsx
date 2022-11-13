import SearchIcon from 'src/assets/icons/search.svg';
import { styles } from './index.styles';

const SearchBar = () => {
  return (
    <div css={styles.container}>
      <input
        css={styles.searchBar}
        placeholder="찾고있는 오마카세가 있으신가요?"
      />
      <img css={styles.img} alt="SearchBar Icon" src={SearchIcon} />
    </div>
  );
};

export default SearchBar;