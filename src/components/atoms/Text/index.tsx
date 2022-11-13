import { ReactNode } from 'react';
import { styles } from './index.styles';

export enum TEXT {
  BODY1 = 'body1',
  BODY2 = 'body2',
  BODY3 = 'body3',
  CAPTION = 'caption',
}

export enum LINE_HEIGHT {
  HEIGHT130 = '130%',
  HEIGHT140 = '140%',
  HEIGHT150 = '150%',
}

export enum FONT_WEIGHT {
  REGULAR = 'regular',
  BOLD = 'bold',
}

export type StyleProps = {
  lineHeight?: LINE_HEIGHT;
  fontWeight?: FONT_WEIGHT;
};

type Props = {
  as: TEXT;
  styleProps: StyleProps;
  children: ReactNode;
};

const Text = ({
  as = TEXT.BODY1,
  styleProps: {
    lineHeight = LINE_HEIGHT.HEIGHT140,
    fontWeight = FONT_WEIGHT.BOLD,
  },
  ...props
}: Props): JSX.Element => {
  return (
    <span
      css={styles[as]({
        lineHeight,
        fontWeight,
      })}
      {...props}
    ></span>
  );
};

export default Text;
