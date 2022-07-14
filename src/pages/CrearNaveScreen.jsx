import CardList from 'components/crearNave/CardList';
import { useNavigate } from 'react-router-dom';
import 'styles/crearNave/crearNave.css';
import 'styles/ui/button.css';
import { ToastContainer} from 'react-toastify';

const CrearNaveScreen = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <section className='section-crearNave animate__animated animate__backInLeft'>
      <button
        onClick={handleReturn}
        className='btn gradient-btn md:bottom-64'
      >
        Volver
      </button>
      <CardList />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </section>
  )
}

export default CrearNaveScreen