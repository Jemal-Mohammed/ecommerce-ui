 
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Auth } from './pages/Auth'
 import { Master } from './pages/Master'
  
 import { Landing } from './pages/Landing'
 import { Shop } from './pages/Shop'
function App() {


  return (
  
 
 <BrowserRouter>
      <Routes >
         <Route path='/' element={<Master />}  >
         <Route index element={< Landing/>} />
         <Route path='shop' element={< Shop/>} />

         <Route path='auth' element={<Auth />} />
         </Route>
      </Routes>
 </BrowserRouter>
   
  )
}

export default App
