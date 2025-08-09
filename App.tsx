
import { SearchContextProvider } from './contexts/SearchContext/SearchContext';
import { ThemeContextProvider } from './contexts/ThemeContext/ThemeContext';
import { AppNavigation } from './src/Navigation/AppNavigation';

export default function App() {
  return (
    <SearchContextProvider>
      <ThemeContextProvider>
        <AppNavigation />
      </ThemeContextProvider>
    </SearchContextProvider>
  );
}
