import './App.css';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar/index';

function App() {
  const currTheme = useSelector(state => state.theme).value;
  return (
    <div className={`App ${currTheme}`}>
      <Navbar/>
    </div>
  );
}

export default App;
