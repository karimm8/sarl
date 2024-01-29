import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Connecte from './component/Connecte';
import CreerFihier from './component/CreerFihier';
import ValideFihier from './component/ValideFihier';
import ListFichier from './component/ListFihier';
import NumSerie from './component/NumSerie';
import { createContext } from 'react';
export const UserContext = createContext(null);
function App() {
  return (
    <div className="App">
      <UserContext.Provider >
         <BrowserRouter>
             <Routes>
                  <Route path='/CreerFichier' element={<CreerFihier />}></Route>
                  <Route path='/ValideFichier' element={<ValideFihier />}></Route>
                  <Route path='/NumSerie' element={<NumSerie />}></Route>
                  <Route path='/ListFichier' element={<ListFichier />}></Route>
                  <Route path='/' element={<Connecte />}></Route>
             </Routes>
         </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
