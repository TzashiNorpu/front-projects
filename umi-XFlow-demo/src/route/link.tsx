    
import { Link } from 'umi';

export const FlowLink= () => (
  <Link to="/flow">流程图</Link>
);

export const ERLink= () => (
  <Link to="/er">ER</Link>
);

export const DAGBasicLink= () => (
  <Link to="/dag/basic">DAG 图编辑解决方案</Link>
);

export const DAGDPLink= () => (
  <Link to="/dag/dynamic-port">DAG 定制动态链接桩</Link>
);

export const DAGLayoutLink= () => (
  <Link to="/dag/layout">DAG 支持左右布局</Link>
);

export const DAGPortLink= () => (
  <Link to="/dag/port-config">DAG 定制连线交互逻辑</Link>
);