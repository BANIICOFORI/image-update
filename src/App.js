import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from './pages/Home';
import AddEditUser from './pages/AddEditUser';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Add' element={<AddEditUser/>}/>
          <Route path='/Update/:id' element={<AddEditUser/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
