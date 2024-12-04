// import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './screens/Login';

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import SignUp from './screens/SignUp.js';
import { CartProvider } from './components/ContextReducer.js';



function App() {
  return (

    // <Ca//
    <CartProvider>


      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/loginuser" element={<Login />} />
            {/* <Route exact path="/signup" element={<SignUp />} /> */}
            {/* <Route exact path="signup" */}
            <Route exact path="/createuser" element={<SignUp />} />

          </Routes>

        </div>

      </Router>
    </CartProvider>
  );
}

export default App;
