import Loadable from 'react-loadable';
import DelayLoading from '@/components/delayLoading';

const Test = Loadable({loader: () => import('../pages/test'), loading: DelayLoading, delay: 3000});

export default [
  {
    path: '/test',
    component: Test
  }
];
