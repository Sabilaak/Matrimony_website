
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import {

  Route,
  Routes
  // Link
} from 'react-router-dom';
import List from './components/List_page/List';
import Footer from './components/Footer/Footer';
import Admin from './components/Admin/Admin';
import UserData from './components/Admin/UserData';
import Userlist from './components/Admin/Userlist';



function App() {
  return (
    <div className="App">
      <Header/>   
      
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/list" element={<List/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/userdata" element={<UserData/>} />
          <Route path="/userlist" element={<Userlist/>} />
        </Routes>
        {/* <Footer/> */}
    </div>
  );
}
export default App;
