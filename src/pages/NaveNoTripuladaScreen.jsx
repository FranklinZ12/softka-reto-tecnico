import { useParams, useNavigate } from 'react-router-dom'
import { fetchNavesById } from 'helpers/fetch';
import { useEffect, useState } from 'react';
import noTripulada from 'assets/noTripulada.jpg';
import 'styles/ui/img-nave.css';
import 'styles/cardNaveID.css';
import "styles/ui/button.css"

const NaveNoTripuladaScreen = () => {
  const { naveID } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const handleReturn = () => {
    navigate(-1);
  };

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl p-14">
      <figure>
        <img src={noTripulada} alt="Album" className='img-style' />
      </figure>
      <div className="card-body">
        <div className='flex flex-col gap-3 '>
          <h3 className='mb-1 font-medium text-3xl'>{nombre}</h3>
          <ul className='flex-col pl-0 mb-0 lista'>
            <li>
              <strong>Tipo:</strong> {tipo}
            </li>
            <li>
              <strong>Altura:</strong> {altura}
            </li>
            <li>
              <strong>Empuje:</strong> {empuje}
            </li>
            <li>
              <strong>Peso:</strong> {peso}
            </li>
            <li>
              <strong>Estado:</strong> {estado}
            </li>
            <li>
              <strong>Objetivo:</strong> {objetivo}
            </li>
            <li>
              <strong>Pais:</strong> {pais}
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