import * as React from 'react';
import layout from '@/layout/base';

interface RouterItem {
  path: string;
  exact?: boolean;
  comp: any;
  layout?: React.ElementType;
}

const routers: RouterItem[] = [
  {
    path: '/',
    exact: true,
    comp: () => { return <div>Home</div> },
    layout
  }
];
export default routers;