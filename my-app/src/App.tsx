import './App.scss';
import { Outlet } from 'react-router';
import { ModalContextProvider } from './components/popup/modal-context/ModalContext';

function App() {

  return (
      <Outlet/>
  );
}

export default App;
