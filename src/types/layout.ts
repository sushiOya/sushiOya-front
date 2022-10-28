import { NextComponentType, NextPageContext } from 'next';
import { NextRouter } from 'next/router';

export type LayoutComponent = React.FC<{
  children: React.ReactNode;
  router: NextRouter;
}>;

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextComponentType<
  NextPageContext,
  IP,
  P
> & {
  Layout?: LayoutComponent;
};
