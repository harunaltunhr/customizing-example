
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2'
import Nav from './components/Nav'
import Intro3 from './components/Intro3'
import Promo from './components/Promo'
import Footer from './components/Footer'
import Btn from './components/btn'
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Btn />
      <Intro1 />
      <Intro2 />
      <Intro3 />
      <Promo />
      <Footer />
    </div>
  );
}

export default App;
