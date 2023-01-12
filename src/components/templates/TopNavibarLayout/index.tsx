import React from 'react';

import Image from 'next/image';
import ArrowLeft from '../../../assets/icons/arrow_left.svg';
import Text, { FONT_WEIGHT, TEXT } from '../../atoms/Text';
import { styles } from './index.styles';

type Props = {
  children: React.ReactNode;
};

export const TopNavibarLayout: React.FC<Props> = (props) => {
  return (
    <div css={styles.containerWrapper}>
      <div css={styles.topNavibar}>
        <div css={styles.iconWrapper}>
          <Image src={ArrowLeft} width={24} height={24} alt={'left arrow'} />
          <Text
            as={TEXT.BODY1}
            styleProps={{ fontWeight: FONT_WEIGHT.REGULAR }}
          >
            N개의 리뷰
          </Text>
        </div>
      </div>
      <div css={styles.container}>{props.children}</div>
    </div>
  );
};
