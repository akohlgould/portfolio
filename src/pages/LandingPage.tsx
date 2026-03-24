import { useTheme } from '../context/ThemeContext';

import SculptureGrid from '../components/SculptureGrid';
import CodeGrid from '../components/CodeGrid';
import AboutPage from './AboutPage';

const LandingPage = () => {
    const { mode } = useTheme();

    return (
        <div className="w-full">
            {/* Dynamic Content Section */}
            <div className="w-full min-h-screen">
                {mode === 'art' ? <SculptureGrid /> : 
                 mode === 'code' ? <CodeGrid /> : 
                 <AboutPage />}
            </div>
        </div>
    );
};

export default LandingPage;
