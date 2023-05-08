import { defineConfig } from 'umi';

export default defineConfig({
  devServer:{
    host:'0.0.0.0',
    port:9001,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { exact: true, path: '/flow', component: '@/pages/XFlow/solutions/flow/index' },
    { exact: true, path: '/er', component: '@/pages/XFlow/solutions/er/index' },
    { exact: true, path: '/dag/basic', component: '@/pages/XFlow/solutions/dag/demos/basic/index' },
    { exact: true, path: '/dag/dynamic-port', component: '@/pages/XFlow/solutions/dag/demos/basic/index' },
    { exact: true, path: '/dag/layout', component: '@/pages/XFlow/solutions/dag/demos/basic/index' },
    { exact: true, path: '/dag/port-config', component: '@/pages/XFlow/solutions/dag/demos/basic/index' },
  ],
  fastRefresh: {},
});
