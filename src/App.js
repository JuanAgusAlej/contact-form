import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormPages from './pages/FormPages.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<FormPages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
