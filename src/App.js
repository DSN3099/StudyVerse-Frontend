import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './components/Auth/SignUp/Signup';
import Signin from './components/Auth/Signin/Signin';
import CourseInfo from './pages/CourseInfo';
import Landing from './pages/Landing';
import CreateCourse from './components/CreateCourse'
import Courseupload from './pages/Courseupload';
import Study from "./pages/StudyPage";
import TeachersPage from './pages/TeachersPage';
import Loader from './components/Auth/SignUp/Loader';

function App() {
  return (
    <div className="App ">
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/loader" element={<Loader />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route exact path="/teacher" element={<TeachersPage />}></Route>
          <Route exact path="/courseinfo/:id" element={<CourseInfo />}></Route>
          <Route path='/createcourse' element = {<CreateCourse />}></Route>
          <Route path='/videoupload/:id' element = {<Courseupload />}></Route>
          <Route path="/video/:id" element={<Study />}></Route>
        </Routes>
    </div>
  );
}

export default App
