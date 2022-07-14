import CardList from 'components/crearNave/CardList';
import { useNavigate } from 'react-router-dom';
import 'styles/crearNave/crearNave.css';
import 'styles/ui/button.css';

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
    </section>
  )
}

export default CrearNaveScreen