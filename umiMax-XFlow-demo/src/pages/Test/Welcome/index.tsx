import { PageContainer } from '@ant-design/pro-components';
import styles from './index.less';
import PageA from './access';

const WelcomePage: React.FC = () => {
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <PageA {...{foo:{ownerId:'333'}}} />
      </div>
    </PageContainer>
  );
};

export default WelcomePage;
