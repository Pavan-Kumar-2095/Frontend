import './App.css';
import Nav from './components/Navbar';
import {BrowserRouter  as Router,Routes,Route} from 'react-router-dom'
import News from './components/News';
import Newsbox from './components/NewsBox';
import Add from './components/Add';
import Delete from './components/Delete';
import Hero from './components/Hero'; 


function App() {


  return (
  
    <Router>
        <Nav/>
        <Routes>
          <Route exact path='/' element={<Hero/>}/> 
          <Route exact path='/news' element={<News/>}/>
          <Route exact path='/news/:id' element={<Newsbox/>}/>
          <Route exact path='/add'  element={<Add/>}/>
          <Route exact path='/delete' element={<Delete/>}/>
        </Routes>
    </Router>
           
  );
}

export default App;
