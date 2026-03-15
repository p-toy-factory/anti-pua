// @ts-expect-error -- internal Rspress alias for the default theme
import { Layout as BasicLayout } from '@theme-original';
import { HomeContent } from './components/HomeContent';

const Layout = () => <BasicLayout afterFeatures={<HomeContent />} />;

export { Layout };
// @ts-expect-error -- re-export everything else from the default theme
export * from '@theme-original';
