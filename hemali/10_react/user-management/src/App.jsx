import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register_Login/Register';
import Login from './Register_Login/Login';
import DataManagement from './Register_Login/DataManagement';
import Home from './Register_Login/Home';
import Comments from './comments_api/Comments';
import Api from './api_curd_operation/Api';
import NewApi from './api_curd_operation/NewApi';
import VariantsExample from './VariantsExample';

function App() {
  return (
    <>
      {/* <Router>
        <div className="App">
          <h1>Simple App</h1>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/data" element={<DataManagement />} />
          </Routes>
        </div>
      </Router> */}
 {/* <Comments/>  */}
 {/* <Api/> */}
 <NewApi/>
 {/* <VariantsExample/> */}
 
    </>
  );
}

export default App;
