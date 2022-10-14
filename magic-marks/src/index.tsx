import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import store from './srore/store';
import './index.scss';
import App from './App';
import { ModalState } from './context/ModalContext';

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
