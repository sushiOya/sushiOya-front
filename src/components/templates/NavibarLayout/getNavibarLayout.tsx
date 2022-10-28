import { LayoutComponent } from '../../../types/layout';
import { NavibarLayout } from './index';

export const getNavibarLayout = (): LayoutComponent => {
  const Layout: LayoutComponent = (props) => {
    return <NavibarLayout>{props.children}</NavibarLayout>;
  };

  return Layout;
};
