import React from 'react';
import { styles } from './index.styles';

export enum TITLE {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
}

type Props = {
  as: TITLE;
  children: React.ReactNode;
};

const Title = ({ as, ...props }: Props): JSX.Element => {
  const TagName = as;

  return <TagName css={styles[as]} {...props} />;
};

export default Title;
