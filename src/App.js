import Header from './Components/Header/Index';
import Main from './Components/Main';
import { Route,Routes} from 'react-router-dom'
import Profile from './Components/Profile';


function App() {
  return (
    <div className="App">
     <Header/>         
     <Routes>
        <Route exact path="/" element={<Main/> }/>
        <Route exact path="/profile" element={<Profile/> }/>
        
     </Routes>
    </div>
  );
}

export default App;
