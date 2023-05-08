import { DAGBasicLink, DAGDPLink, DAGLayoutLink, DAGPortLink, ERLink, FlowLink } from '@/route/link';
import '@antv/xflow/dist/index.css';
import 'antd/dist/antd.css';
export default function IndexPage() {
  return (
    <>
      <FlowLink/>
      <br />
      <ERLink/>
      <br />
      <DAGBasicLink/>
      <br />
      <DAGDPLink/>
      <br />
      <DAGLayoutLink/>
      <br />
      <DAGPortLink/>
    </>
  );
}
