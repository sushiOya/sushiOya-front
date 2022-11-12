import { ReactNode } from 'react';
import { styles } from './index.styles';

type Props = {
  children: ReactNode;
};

const Card = (props: Props): JSX.Element => {
  return <div css={styles.container}>{props.children}</div>;
};

export default Card;
