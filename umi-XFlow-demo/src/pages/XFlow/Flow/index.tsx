import XFlowDemo from '@/compnent/XFlow/solutions/flow/demos';
import '@antv/xflow/dist/index.css';
import 'antd/dist/antd.css';

export default function App(){
  return (
    <div>
      <XFlowDemo meta={{
        flowId: '5555'
      }} />
    </div>
  );
}
