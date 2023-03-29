import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './components/Screen/LandingPage/LandingPage';

const App=()=> {
  return (
    <>
    <Header />
    <main>
      <LandingPage/>
    </main>
    <Footer />
    </>
  );
}

export default App;
