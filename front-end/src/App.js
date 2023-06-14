import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './components/Screen/LandingPage/LandingPage';
import LoginScreen from './components/Screen/LoginScreen';
import RegisterScreen from './components/Screen/RegisterScreen';
import MyNotes from './components/Mynotes/MyNotes';
import CreateNotes from './components/Mynotes/CreateNotes';
import {BrowserRouter,Route,Routes} from "react-router-dom"

const App=()=> {
  return (
    <BrowserRouter>
    <Header />
    <main>
      <Routes>
      <Route path='/' Component={LandingPage} exact/>
      <Route path='/login' Component={LoginScreen} exact/>
      <Route path='/register' Component={RegisterScreen} exact/>
      <Route path='/myNotes' Component={()=><MyNotes/>}/>
      <Route path='/createnote' Component={()=><CreateNotes/>}/>
      </Routes>
    </main>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
