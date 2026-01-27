import { ThemeProvider } from './context/ThemeContext';
import RootLayout from './layouts/RootLayout';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <ThemeProvider>
      <RootLayout>
        <LandingPage />
      </RootLayout>
    </ThemeProvider>
  );
}

export default App;
