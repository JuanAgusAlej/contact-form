import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormPages from './pages/FormPages.jsx';
import FormPagesInfo from './pages/FormPagesInfo.jsx';
import { UserProvider } from './providers/UserProvider.jsx';
import Loguin from './pages/Loguin/Loguin.jsx';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" index element={<Loguin />} />
            <Route path="/addContact" element={<FormPages />} />
            <Route path="/contact" element={<FormPagesInfo />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
