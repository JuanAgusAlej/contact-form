import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormPages from './pages/FormPages.jsx';
import FormPagesInfo from './pages/FormPagesInfo.jsx';
import { UserProvider } from './providers/UserProvider.jsx';
import Loguin from './pages/Loguin/Loguin.jsx';
import EditContact from './pages/EditContact.jsx';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" index element={<Loguin />} />
            <Route path="/addContact" element={<FormPages />} />
            <Route path="/editContact/:id" element={<EditContact />} />
            <Route path="/contact" element={<FormPagesInfo />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
