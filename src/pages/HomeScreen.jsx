import Busqueda from "components/Busqueda";
import { Fragment, useEffect, useState } from "react";
import { fetchNotripulado } from "helpers/fetch";
import { Link } from "react-router-dom";
import Button from "components/ui/Button";

const HomeScreen = () => {
  const [dataNoTripulado, setDataNoTripulado] = useState([]);
  const [dataTripulado, setDataTripulado] = useState([]);
  const [dataLanzadera, setDataLanzadera] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchNotripulado('/naveNoTripulada').then(data => {
      setDataNoTripulado(data);
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      console.log("finally");
      setLoading(false);
    }
    );
  }, []);

  useEffect(() => {
    fetchNotripulado('/naveTripulada').then(data => {
      setDataTripulado(data);
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      console.log("finally");
      setLoading(false);
    }
    );
  }, []);

  useEffect(() => {
    fetchNotripulado('/naveLanzadera').then(data => {
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
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Tipo de vehiculo espacial</th>
              <th>Peso</th>
            </tr>
          </thead>
          {loading ? (<div>Loading...</div>) : (
            <tbody>
              {dataNoTripulado.map(nave => {
                return (
                  <tr key={nave._id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div>
                          <div className="font-bold">{nave.nombre}</div>
                          <div className="text-sm opacity-50">{nave.pais}</div>
                        </div>
                      </div>
                    </td>
                    <td>{nave.tipo}</td>
                    <td>{nave.peso}KG</td>
                    <th>
                      <Link to={`/naveNoTripulada/${nave._id}`}
                        className="btn btn-ghost btn-xs">Detalles
                      </Link>
                    </th>
                  </tr>
                )
              })}
              {dataTripulado.map(nave => {
                return (
                  <tr key={nave._id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div>
                          <div className="font-bold">{nave.nombre}</div>
                          <div className="text-sm opacity-50">{nave.pais}</div>
                        </div>
                      </div>
                    </td>
                    <td>{nave.tipo}</td>
                    <td>{nave.peso}KG</td>
                    <th>
                      <Link to={`/naveTripulada/${nave._id}`}
                        className="btn btn-ghost btn-xs">Detalles
                      </Link>
                    </th>
                  </tr>
                )
              })}
              {dataLanzadera.map(nave => {
                return (
                  <tr key={nave._id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div>
                          <div className="font-bold">{nave.nombre}</div>
                          <div className="text-sm opacity-50">{nave.pais}</div>
                        </div>
                      </div>
                    </td>
                    <td>{nave.tipo}</td>
                    <td>{nave.peso}KG</td>
                    <th>
                      <Link to={`/naveLanzadera/${nave._id}`}
                        className="btn btn-ghost btn-xs">Detalles
                      </Link>
                    </th>
                  </tr>
                )
              })}
            </tbody>
          )}
        </table>
      </div>
    </Fragment>
  )
}

export default HomeScreen