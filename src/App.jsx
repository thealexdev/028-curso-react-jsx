import { FundamentalsWeb } from './pages/FundamentalsWeb';
import { LandingPage } from './pages/LandingPage';
import { CourseBlock } from './pages/CourseBlock';
import { ReactIntroduction } from './pages/ReactIntroduction';
import { PropsCommunication } from './pages/PropsCommunication';
import { StateEvents } from './pages/StateEvents';

export const App = () => {
    const blockNumber = Number(
        window.location.pathname.match(/^\/bloque-(\d+)$/)?.[1],
    );

    if (blockNumber === 1) return <FundamentalsWeb />;
    if (blockNumber === 2) return <ReactIntroduction />;
    if (blockNumber === 3) return <PropsCommunication />;
    if (blockNumber === 4) return <StateEvents />;
    if (blockNumber >= 2 && blockNumber <= 13) return <CourseBlock />;

    return <LandingPage />;
};
