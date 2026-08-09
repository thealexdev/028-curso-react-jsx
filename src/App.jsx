import { FundamentalsWeb } from './pages/FundamentalsWeb';
import { LandingPage } from './pages/LandingPage';
import { CourseBlock } from './pages/CourseBlock';

export const App = () => {
    const blockNumber = Number(window.location.pathname.split('/').pop());

    if (blockNumber === 1) return <FundamentalsWeb />;
    if (blockNumber >= 2 && blockNumber <= 13) return <CourseBlock />;

    return <LandingPage />;
};
