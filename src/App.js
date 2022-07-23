import './App.css';
import { useGlobalContext } from './helpers/context';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';

function App() {
  const {state:{loading}} = useGlobalContext()
  if (loading) {
    <div className="loading">
      <h1>loading...</h1>
    </div>
  }
  return (
    <div>
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;
