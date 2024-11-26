import './App.css';
import Nav from './components/Navbar';
import {BrowserRouter  as Router,Routes,Route} from 'react-router-dom'
import Hero from './components/Hero';
import Shop from './components/Shop';
import Item from './components/Item';
import Input from './components/Input';
import Delete from './components/Delete';
import Signup from './components/Signup';
import Login from './components/Login';
import Loggindel from './components/Loggindel';
function App() {


  return (
  
    <Router>
        <Nav/>
        <Routes>
            <Route exact path='/' element={<Hero/>}/>
            <Route exact path='/shop' element={<Shop/>}/>
            <Route exact path='/shop/:id' element={<Item/>}/>
            <Route exact path='/add'  element={<Login/>}/>
            <Route exact path='/signup'  element={<Signup/>}/>
            <Route exact path='/input'  element={<Input/>}/>
            <Route exact path='/delete' element={<Loggindel/>}/>
            <Route exact path='/realdelete' element={<Delete/>}/>
            <Route exact path='/login' element={<Login/>}/>
        </Routes>
    </Router>
           
  );
}

export default App;
