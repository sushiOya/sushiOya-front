import BackSpace from '../../../assets/icons/backspace.svg';
import { styles } from './index.styles';

const StoreInfoHeaderIcons = (): JSX.Element => {
  return (
    <div css={styles.container}>
      <img css={styles.backSpace} alt="BackSpace" src={BackSpace} />
      <div css={styles.textContainer}>
        <p css={styles.text}>정보 수정</p>
      </div>
    </div>
  );
};

export default StoreInfoHeaderIcons;
