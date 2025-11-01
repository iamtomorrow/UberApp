
import { AppNavigation } from './src/Navigation/AppNavigation';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { ThemeContextProvider } from './contexts/ThemeContext/ThemeContext';

export default function App( ) {
  return (
    <Provider store={ store }>
      <ThemeContextProvider>
        <AppNavigation />
      </ThemeContextProvider>
    </Provider>
  )
}

/* export default function App() {
  return (
    <SearchContextProvider>
      <ThemeContextProvider>
        <AppNavigation />
      </ThemeContextProvider>
    </SearchContextProvider>
  );
}
 */