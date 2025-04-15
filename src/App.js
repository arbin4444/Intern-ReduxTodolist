import logo from './logo.svg';
import './App.css';
import {Todolistapp} from './Components/Todolistapp'
import { Provider } from 'react-redux';
import {Store} from './Store'

function App() {
  return (
    <Provider store = {Store}>
        <div className="App">
          <Todolistapp/>
        </div>
    </Provider>
    
  );
}

export default App;
