import { useParams, useNavigate } from 'react-router-dom'
import { fetchNavesById } from 'helpers/fetch';
import { useEffect, useState } from 'react';
import noTripulada from 'assets/noTripulada.jpg';
import 'styles/ui/img-nave.css';
import 'styles/cardNaveID.css';
import "styles/ui/button.css"
import Loading from 'components/ui/Loading';


const NaveNoTripuladaScreen = () => {
  const { naveID } = useParams();//naveID es el id de la nave sacada de la url.
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  //fetch a la api para obtener la nave con el id que se le pasa por parametro en la url
  //y guardarla en el state de data para mostrarla en el componente.
  useEffect(() => {
    setLoading(true);
    fetchNavesById(`/naveNoTripulada/${naveID}`)
      .then(data => {
        setData(data);
      }).catch(err => {
        console.log('error', err);
        if (err.status === 404 || err.status === 500) {
          navigate('/');
        }
      }).finally(() => {
        setLoading(false);
      }
      );
  }, [])

  const { altura,
    empuje,
    nombre,
    peso,
    estado,
    objetivo,
    pais,
    _id,
    tipo
  } = data;

  //funcion para volver a la pantalla anterior (la de las naves en la tabla)
  const handleReturn = () => {
    navigate(-1);
  };

  //componente que muestra un loading mientras se carga la nave
    if (loading) {
      return <Loading type='spinningBubbles'/>
    }
  return (
      <div className="card lg:card-side bg-base-100 shadow-xl p-14 animate__animated animate__fadeIn">
        <figure>
          <img src={noTripulada} alt="Album" className='img-style' />
        </figure>
        <div className="card-body">
          <div className='flex flex-col gap-3 '>
            <h3 className='mb-1 font-medium text-3xl'>{nombre}</h3>
            <ul className='flex-col pl-0 mb-0 lista'>
              <li>
                <strong>Tipo:</strong> {tipo}.
              </li>
              <li>
                <strong>Altura:</strong> {altura} (m).
              </li>
              <li>
                <strong>Empuje:</strong> {empuje} (kg).
              </li>
              <li>
                <strong>Peso:</strong> {peso} (kg).
              </li>
              <li>
                <strong>Estado:</strong> {estado}.
              </li>
              <li>
                <strong>Objetivo:</strong> {objetivo}.
              </li>
              <li>
                <strong>Pais:</strong> {pais}.
              </li>
            </ul>
          </div>
          <div className="card-actions justify-center md:justify-end">
            <button
              className="btn gradient-btn"
              onClick={handleReturn}
            >
              Volver</button>
          </div>
        </div>
      </div>
  )
}

export default NaveNoTripuladaScreen