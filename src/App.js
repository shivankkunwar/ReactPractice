import {  Route, Routes } from 'react-router-dom';
import Home from'./components/Home';
import Searchbar from './components/Searchbar/Searchbar'
import Counter from './components/Counter/Counter';
import Navbar from './components/Navbar/Navbar'
import BlogList from './components/BlogList/BlogList';
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <div >
          <Routes>
            <Route path='/searchbar' element={<Searchbar />}/>
            <Route path='/counter' element={<Counter />}/>
            <Route path='/list' element={<BlogList />}/>
            <Route path='/' element={<Home />}/>
          </Routes>
      </div>
     
     

     
    </div>
  );
}

export default App;
