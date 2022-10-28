import './App.css';
import {Route,Routes} from 'react-router-dom';
import Home from './pages/Home'
import Signup from './components/Auth/SignUp/Signup';
import Signin from './components/Auth/Signin/Signin';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
      </Routes>
    </div>
  );
}

export default App;