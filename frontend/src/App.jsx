import { Routes, Route } from 'react-router-dom'
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from "./assets/theme";

import Navbar from './components/Navbar';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import { Quizzes } from './pages/Quizzes';
import { Quiz } from './pages/Quiz';
import { AnnualReport } from './pages/AnnualReport';
import { AddQuiz } from './pages/AddQuiz';
import { AddQuestions } from './pages/AddQuestions';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/quizzes' element={<Quizzes />} />
        <Route path='/quiz/:quizId' element={<Quiz />} />
        <Route path='/annual-report' element={<AnnualReport />} />
        <Route path='/add-quiz' element={<AddQuiz />} />
        <Route path='/add-questions' element={<AddQuestions />} />
      </Routes>
    
    </ThemeProvider>
    
  );
}

export default App;
