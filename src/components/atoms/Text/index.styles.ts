import { css, SerializedStyles } from '@emotion/react';
import { StyleProps } from './index';

export const styles = {
  base: (props: StyleProps): SerializedStyles => css`
    line-height: ${props.lineHeight};
    font-weight: ${props.fontWeight};
  `,
  body1: (props: StyleProps): SerializedStyles => css`
    ${styles.base(props)}
    font-size: 16px;
  `,
  body2: (props: StyleProps): SerializedStyles => css`
    ${styles.base(props)}
    font-size: 15px;
  `,
  body3: (props: StyleProps): SerializedStyles => css`
    ${styles.base(props)}
    font-size: 14px;
  `,
  caption: (props: StyleProps): SerializedStyles => css`
    ${styles.base(props)}
    font-size: 12px;
  `,
};
