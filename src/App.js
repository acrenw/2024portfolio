import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameCanvas from './components/GameCanvas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<GameCanvas />} />
      </Routes>
    </Router>
  );
}

export default App;
