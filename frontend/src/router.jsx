import Pay from "./components/stripeSample/pay";
import Success from "./components/stripeSample/Success";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function Router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Pay/>} />
          <Route path='success' element={<Success/>} />
        </Routes>
      </ BrowserRouter>
    );
  }
  
  export default Router;