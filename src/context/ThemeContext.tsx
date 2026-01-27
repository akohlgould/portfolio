import { createContext, useContext, useState, type ReactNode } from 'react';

type Mode = 'art' | 'code';

interface ThemeContextType {
    mode: Mode;
    setMode: (mode: Mode) => void;
    toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = useState<Mode>('art');

    const toggleMode = () => {
        setMode((prev) => (prev === 'art' ? 'code' : 'art'));
    };

    return (
        <ThemeContext.Provider value={{ mode, setMode, toggleMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
