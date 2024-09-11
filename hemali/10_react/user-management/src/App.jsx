import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register_Login/Register';
import Login from './Register_Login/Login';
import DataManagement from './Register_Login/DataManagement';
import Home from './Register_Login/Home';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <h1>Simple App</h1>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Default route now shows the Home component */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/data" element={<DataManagement />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
