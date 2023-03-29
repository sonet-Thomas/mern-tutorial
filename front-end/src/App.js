import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './components/Screen/LandingPage/LandingPage';
import MyNotes from './components/Mynotes/MyNotes';
import {BrowserRouter,Route,Routes} from "react-router-dom"

const App=()=> {
  return (
    <BrowserRouter>
    <Header />
    <main>
      <Routes>
      <Route path='/' Component={LandingPage} exact/>
      <Route path='/myNotes' Component={()=><MyNotes/>}/>
      </Routes>
    </main>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
