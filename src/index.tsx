import { render } from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'app/providers/ThemeProvider';
import { App } from 'app/App';
import 'shared/config/routeConfig/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';

import 'app/styles/index.scss';

render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root'),
);
