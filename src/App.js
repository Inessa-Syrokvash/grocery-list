import './App.css';
import shopping from './shopping.jpg';
import man from './man.jpg';
import { GroceryList } from './GroceryList';


function App() {
  return (
    <div className="App">
      <div className='container'>
        <img src={ shopping } width='200px' alt='shopping' />
      </div>
      <div className='container'>
        <h1>Grocery list:</h1>
      </div>
      <GroceryList />
      <div className='container'>
        <img src={ man } width='200px' alt='man' />
      </div>
    </div>
  );
}

export default App;
