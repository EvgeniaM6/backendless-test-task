import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { App } from './script/App';
import './sass/styles.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <App />
  </HashRouter>
);
