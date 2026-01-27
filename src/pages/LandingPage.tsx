import { useTheme } from '../context/ThemeContext';

import SculptureGrid from '../components/SculptureGrid';
import CodeGrid from '../components/CodeGrid';

const LandingPage = () => {
    const { mode } = useTheme();

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">


            {/* Dynamic Content Section */}
            <div className="w-full min-h-screen">
                {mode === 'art' ? <SculptureGrid /> : <CodeGrid />}
            </div>
        </div>
    );
};

export default LandingPage;
