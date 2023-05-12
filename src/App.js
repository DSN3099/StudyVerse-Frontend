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
import Teacher from "./pages/Teacher";
import TeachersPage from './pages/TeachersPage';
import Profile from "./pages/Profile";
import Forget from './components/Auth/Signin/Forget';
import Changepassword from './components/Auth/Signin/Changepassword';
import Security from './pages/Security';
import Recover from './components/Auth/SignUp/Recover'
import { GoogleOAuthProvider } from '@react-oauth/google';
import Chatbot from './components/Chatbot/Chatbot';
import Checkout from './pages/Checkout';
import Success from './pages/Success'

function App() {
  return (
    <div className="App ">
      <GoogleOAuthProvider clientId='387769380643-bbrns9vbn9r0d75148iv0dnbbtlm0h5p.apps.googleusercontent.com'>
          <Routes>
            <Route exact path="/" element={<Landing />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            <Route path="/recovery" element={<Recover />}></Route>
            <Route path="/forget" element={<Forget />}></Route>
            <Route path="/changepass/:id" element={<Changepassword />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route exact path="/teacher" element={<TeachersPage />}></Route>
            <Route exact path="/courseinfo/:id" element={<CourseInfo />}></Route>
            <Route path='/createcourse' element={<CreateCourse />}></Route>
            <Route path='/videoupload/:id' element={<Courseupload />}></Route>
            <Route path="/video/:id" element={<Study />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/security" element={<Security />}></Route>
            <Route path="/teacher/:id" element={<Teacher />}></Route>
            <Route path='/checkout/:id' element={<Checkout />}></Route>
            <Route path='/success' element={<Success />}></Route>
          </Routes>
        <Chatbot />
      </GoogleOAuthProvider>
    </div>
  );
}

export default App
