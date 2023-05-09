import { defineConfig } from '@umijs/max'; 
import {routes} from './routes';
import {layout} from './layout';
export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {  },
  request: {},
  
  npmClient: 'pnpm',
  layout: layout,
  routes:routes
});