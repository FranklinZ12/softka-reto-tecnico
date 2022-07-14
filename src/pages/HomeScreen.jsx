import Busqueda from "components/Busqueda";
import { Fragment, useEffect, useState } from "react";
import { fetchNaves } from "helpers/fetch";
import Button from "components/ui/Button";
import Tbody from "components/homeScreen/Tbody";
import ReactLoading from 'react-loading';

const HomeScreen = () => {
  const [dataNoTripulado, setDataNoTripulado] = useState([]);
  const [dataTripulado, setDataTripulado] = useState([]);
  const [dataLanzadera, setDataLanzadera] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchNaves('/naveNoTripulada').then(data => {
      setDataNoTripulado(data);
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      setLoading(false);
    }
    );
  }, []);

  useEffect(() => {
    setLoading(true);
    fetchNaves('/naveTripulada').then(data => {
      setDataTripulado(data);
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      setLoading(false);
    }
    );
  }, []);

  useEffect(() => {
    setLoading(true);
    fetchNaves('/naveLanzadera').then(data => {
      setDataLanzadera(data);
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      setLoading(false);
    }
    );
  }, []);

  return (
    <Fragment>
      <h1 className="text-center title-style">Estación espacial Softka</h1>
      <div className="flex justify-between">
        <Button texto='Crear nave espacial' url="/crearNave" />
        <Busqueda />
      </div>
      <div className="divider"></div>
      <div className="overflow-x-auto w-full">
          {loading ? (<ReactLoading type={'SpinningBubbles'} color={'#5a297e'} height={'50%'} width={'50%'} />) : (
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Tipo de vehiculo espacial</th>
              <th>Peso</th>
            </tr>
          </thead>
            <tbody>
              {dataNoTripulado.map(nave => {
                return (
                  <tr key={nave._id}>
                    <Tbody nombre={nave.nombre}
                      pais={nave.pais} tipo={nave.tipo} peso={nave.peso}
                    />
                    <th>
                      <Button texto='Detalles' url={`/naveNoTripulada/${nave._id}`} />
                    </th>
                  </tr>
                )
              })}
              {dataTripulado.map(nave => {
                return (
                  <tr key={nave._id}>
                    <Tbody nombre={nave.nombre}
                      pais={nave.pais} tipo={nave.tipo} peso={nave.peso}
                    />
                    <th>
                      <Button texto='Detalles' url={`/naveTripulada/${nave._id}`} />
                    </th>
                  </tr>
                )
              })}
              {dataLanzadera.map(nave => {
                return (
                  <tr key={nave._id}>
                    <Tbody nombre={nave.nombre}
                      pais={nave.pais} tipo={nave.tipo} peso={nave.peso}
                    />
                    <th>
                      <Button texto='Detalles' url={`/naveLanzadera/${nave._id}`} />
                    </th>
                  </tr>
                )
              })}
            </tbody>
        </table>
          )}
      </div>
    </Fragment>
  )
}

export default HomeScreen