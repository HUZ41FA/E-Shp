
import Topbar from './components/dashboard/Topbar';
import Cart from './pages/Cart';
import DashboardHome from './pages/dashboard/DashboardHome';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList'
import Register from './pages/Register';
import Router from './router'
import styled from 'styled-components';


const Container = styled.div`
  display : flex;
`

function App() {
  return (
    <>
      <Topbar/>
      <Container>
        <DashboardHome />
      </Container>
    </>
  );
}

export default App;
