import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbr from './Components/Navbr';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import SignIn from './Pages/signin';
import SignUp from './Pages/signup';



function App() {
  return (
    <div className="App">
    <Navbr/>
    <h1>Ab</h1>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/signin" element={<SignIn/>} />
    </Routes>
    </div>
  );
}

export default App;
