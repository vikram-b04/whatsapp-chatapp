import './App.css';
import { Whatsapp } from './Whatsapp';
import logo from './images/whatsapplogo.png';


function App() {
  return (
    <div className="App">
       <div className='d-flex pt-3'>
        <div className='logo ms-4'>
            <img src = {logo} alt="" />
        </div>
        <div className="logoname text-white mt-1 ms-2">
            <h6>WhatsApp</h6>
        </div>
        </div>
      <Whatsapp />
    </div>
  );
}

export default App;
