import { LayoutComponent } from '../../../types/layout';
import { TopNavibarLayout } from './index';

export const getTopNavibarLayout = (): LayoutComponent => {
  const Layout: LayoutComponent = (props) => {
    return <TopNavibarLayout>{props.children}</TopNavibarLayout>;
  };

  return Layout;
};
