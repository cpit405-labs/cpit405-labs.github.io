import './App.css';
import Header from './componemts/Header';
import About from './components/About';
import Shink from './components/Shink';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
    </div>

    <Routes>
      <Route path='/' element={<Shink/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
// Path: cpit405-labs.github.io/myWork/labs/lab8/shink/src/components/About.js