import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import store from './srore/store';
import App from './App';
import { ModalState } from './context/ModalContext';
import './index.scss';
import './i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <ModalState>
      <Router>
        <App />
      </Router>
    </ModalState>
  </Provider>,
);
