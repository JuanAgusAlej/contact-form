import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormPages from './pages/FormPages.jsx';
import FormPagesInfo from './pages/FormPagesInfo.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<FormPages />} />
          <Route path='/formInfo' element={<FormPagesInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
