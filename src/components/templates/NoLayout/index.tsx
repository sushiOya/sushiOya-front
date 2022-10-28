import React from 'react';

export type Props = {
  children: React.ReactNode;
};

export const NoLayout: React.FC<Props> = (props: Props) => (
  <>{props.children}</>
);
