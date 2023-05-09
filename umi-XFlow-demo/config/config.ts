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
    { path: '/', component: './index' },
    { exact: true, path: '/flow', component: './XFlow/Flow' },
    { exact: true, path: '/er', component: './XFlow/ER' },
    { exact: true, path: '/dag/basic', component: './XFlow/DAG/Basic' },
    { exact: true, path: '/dag/dynamic-port', component: './XFlow/DAG/Dynamic-ports' },
    { exact: true, path: '/dag/layout', component: './XFlow/DAG/Layout' },
    { exact: true, path: '/dag/port-config', component: './XFlow/DAG/Port-config' },
  ],
  fastRefresh: {},
});
