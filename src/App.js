import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Signup from './components/Auth/SignUp/Signup';
import Signin from './components/Auth/Signin/Signin';
import CourseInfo from './pages/CourseInfo';
import Landing from './pages/Landing';
import Courseupload from './pages/Courseupload';
import Study from "./pages/StudyPage";
import CreateCourse from './components/CreateCourse';
function App() {
  return (
    <div className="App ">
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route exact path="/courseinfo:id" element={<CourseInfo />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/study" element={<Study />}></Route>
          <Route path='/createcourse' element = {<CreateCourse />}></Route>
          <Route path='/courseupload' element = {<Courseupload />}></Route>
        </Routes>
    </div>
  );
}

export default App;