import './styles/App.css';
import { InputSide } from './Components/InputSide';
import { OutputSide } from './Components/OutputSide';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className='row app'>
      <InputSide/>
      <OutputSide/>
    </div>
  );
}

export default App;
