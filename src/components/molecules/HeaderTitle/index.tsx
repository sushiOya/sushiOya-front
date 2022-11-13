import { ReactNode } from 'react';
import Image from 'next/image';
import ExpandRight from '../../../assets/icons/expand_right.svg';
import { styles } from './index.styles';

type Props = {
  children: ReactNode;
  withIcon: boolean;
};

const HeaderTitle = ({ withIcon = true, ...props }: Props): JSX.Element => {
  const Icon = withIcon && (
    <div css={styles.iconsWrapper}>
      <Image
        src={ExpandRight}
        alt={'expandRight'}
        layout={'fill'}
        unoptimized
      />
    </div>
  );

  return (
    <div css={styles.container}>
      <div css={styles.titleWrapper}>{props.children}</div>
      {Icon}
    </div>
  );
};

export default HeaderTitle;
