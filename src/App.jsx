import RoutesMain from './routes/RoutesMain'
import "./styles/index.css"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
     <RoutesMain />
     <ToastContainer />
    </>
  )
}

export default App
