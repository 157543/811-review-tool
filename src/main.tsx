import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'katex/dist/katex.min.css';
import './pwa.css';
import App from './App';
import { registerOfflineSupport } from './pwa';

createRoot(document.getElementById('root')!).render(<StrictMode><App/></StrictMode>);
registerOfflineSupport();
