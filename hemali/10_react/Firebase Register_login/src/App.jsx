import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componets/Header';
import Login from './componets/Login';
import Register from './componets/Register';
import Dashboard from './componets/Dashboard';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container mt-4">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

