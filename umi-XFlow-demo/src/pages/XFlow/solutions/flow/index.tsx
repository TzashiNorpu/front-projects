import '@antv/xflow/dist/index.css';
import 'antd/dist/antd.css';
import XFlowDemo from './demos';

export default function XFlowFlowComponent() {
  return (
    <div style={{height:800}}>
      <XFlowDemo meta={{
        flowId: '112'
      }} />
    </div>
  );
}
