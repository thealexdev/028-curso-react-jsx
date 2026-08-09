import { FundamentalsWeb } from './pages/FundamentalsWeb';
import { LandingPage } from './pages/LandingPage';
import { CourseBlock } from './pages/CourseBlock';
import { ReactIntroduction } from './pages/ReactIntroduction';
import { PropsCommunication } from './pages/PropsCommunication';
import { StateEvents } from './pages/StateEvents';
import { EffectsExternalData } from './pages/EffectsExternalData';
import { Routing } from './pages/Routing';
import { AdvancedHooks } from './pages/AdvancedHooks';
import { Styles } from './pages/Styles';
import { DocumentationBlock } from './components/learning/DocumentationBlock';
import { formsBlock } from './data/formsLessons';
import { architectureBlock } from './data/architectureLessons';
import { performanceBlock } from './data/performanceLessons';
import { testingBlock } from './data/testingLessons';
import { finalProjectBlock } from './data/finalProjectLessons';

export const App = () => {
    const blockNumber = Number(
        window.location.pathname.match(/^\/bloque-(\d+)$/)?.[1],
    );

    if (blockNumber === 1) return <FundamentalsWeb />;
    if (blockNumber === 2) return <ReactIntroduction />;
    if (blockNumber === 3) return <PropsCommunication />;
    if (blockNumber === 4) return <StateEvents />;
    if (blockNumber === 5) return <EffectsExternalData />;
    if (blockNumber === 6) return <Routing />;
    if (blockNumber === 7) return <AdvancedHooks />;
    if (blockNumber === 8) return <Styles />;
    if (blockNumber === 9) return <DocumentationBlock block={formsBlock} />;
    if (blockNumber === 10) return <DocumentationBlock block={architectureBlock} />;
    if (blockNumber === 11) return <DocumentationBlock block={performanceBlock} />;
    if (blockNumber === 12) return <DocumentationBlock block={testingBlock} />;
    if (blockNumber === 13) return <DocumentationBlock block={finalProjectBlock} />;
    if (blockNumber >= 2 && blockNumber <= 13) return <CourseBlock />;

    return <LandingPage />;
};
