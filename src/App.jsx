import { FundamentalsWeb } from './pages/FundamentalsWeb';
import { LandingPage } from './pages/LandingPage';
import { CourseBlock } from './pages/CourseBlock';
import { ReactIntroduction } from './pages/ReactIntroduction';
import { PropsCommunication } from './pages/PropsCommunication';
import { StateEvents } from './pages/StateEvents';
import { EffectsExternalData } from './pages/EffectsExternalData';
import { Routing } from './pages/Routing';
import { AdvancedHooks } from './pages/AdvancedHooks';

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
    if (blockNumber >= 2 && blockNumber <= 13) return <CourseBlock />;

    return <LandingPage />;
};
