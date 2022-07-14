import { fetchNavesById } from "helpers/fetch";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import tripulada from 'assets/tripulada.jpg';
import 'styles/ui/img-nave.css';
import 'styles/cardNaveID.css';
import "styles/ui/button.css"
import ReactLoading from 'react-loading';
import Loading from "components/ui/Loading";

const NaveTripuladaScreen = () => {
  const { naveID } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchNavesById(`/naveTripulada/${naveID}`)
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
    nombre,
    peso,
    capacidadPersonas,
    objetivo,
    pais,
    _id,
    tipo
  } = data;

  //funcion para volver a la pantalla anterior (la de las naves en la tabla)
  const handleReturn = () => {
    navigate(-1);
  };

  if (loading) {
    return <Loading type='spinningBubbles'/>
  }
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl p-14">
      <figure>
        <img src={tripulada} alt="Album" className='img-style' />
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
              <strong>Capacidad de personas:</strong> {capacidadPersonas}.
            </li>
            <li>
              <strong>Peso:</strong> {peso} (TON).
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

export default NaveTripuladaScreen