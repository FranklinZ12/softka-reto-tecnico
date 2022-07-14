import { fetchNavesById } from 'helpers/fetch';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Lanzadera from 'assets/lanzadera.jpg';
import 'styles/ui/img-nave.css';
import 'styles/cardNaveID.css';
import "styles/ui/button.css"
import Loading from 'components/ui/Loading';

const NaveLanzaderaScreen = () => {
  const { naveID } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchNavesById(`/naveLanzadera/${naveID}`)
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
  }, [naveID, navigate]);

  const { altura,
    empuje,
    nombre,
    peso,
    pais,
    _id,
    tipo,
    pesoCarga
  } = data;

  const handleReturn = () => {
    navigate(-1);
  };

  if (loading) {
    return <Loading type='spinningBubbles' />
  }
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl p-14">
      <figure>
        <img src={Lanzadera} alt="Album" className='img-style' />
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
              <strong>Empuje:</strong> {empuje} (TON).
            </li>
            <li>
              <strong>Peso:</strong> {peso} (TON).
            </li>
            <li>
              <strong>Peso de carga:</strong> {pesoCarga} (TON).
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

export default NaveLanzaderaScreen