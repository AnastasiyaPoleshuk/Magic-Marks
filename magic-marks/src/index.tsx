import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { CookiesProvider } from 'react-cookie';
import store from './srore/store';
import App from './App';
import { ModalState } from './context/ModalContext';
import './index.scss';
import './i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <CookiesProvider>
    <Provider store={store}>
      <ModalState>
        <Router>
          <App />
        </Router>
      </ModalState>
    </Provider>
  </CookiesProvider>,
);
