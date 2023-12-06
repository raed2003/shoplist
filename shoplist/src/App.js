
import { Carousel } from 'bootstrap';
import './App.css';
import Navbar from './components/Navbar';
import Carouselle from './components/Carouselle';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShopCart from './components/ShopCart';
import Shoplist from './components/Shoplist';
import Products from './components/data';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carouselle/>
      <Shoplist props={Products}/>
    </div>
  );
}
export default App;
