import { createRoot } from 'react-dom/client';
import App from './components/App';
import initializePhaser from './phaser/phaserGame';

initializePhaser();

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
