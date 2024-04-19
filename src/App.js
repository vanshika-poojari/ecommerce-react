
import './App.css';
import Navbar from "./components/Navbar"; 
import Home from "./components/Home"; 
import { Routes,Route} from 'react-router-dom'; 
import Products from "./components/Products"; 
import { UNSAFE_convertRoutesToDataRoutes } from '@remix-run/router';

function App() {
  return (
    <div>
   <Navbar />
<UNSAFE_convertRoutesToDataRoutes>
   <Route exact path = "/ " component = {Home} />
   <Route exact path = "/products" component = {Products} />
   
</UNSAFE_convertRoutesToDataRoutes>
    </div>
  );
}

export default App;
