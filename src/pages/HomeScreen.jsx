import Busqueda from "components/Busqueda";
import { Fragment, useEffect, useState } from "react";
import { fetchNaves } from "helpers/fetch";
import Button from "components/ui/Button";
import Tbody from "components/homeScreen/Tbody";
import 'animate.css';
import Loading from "components/ui/Loading";

const HomeScreen = () => {
  const [dataNoTripulado, setDataNoTripulado] = useState([]);
  const [dataTripulado, setDataTripulado] = useState([]);
  const [dataLanzadera, setDataLanzadera] = useState([]);
  const [loading, setLoading] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [navesFiltradasNoTripuladas, setNavesFiltradas] = useState(dataNoTripulado);
  const [navesFiltradasTripulado, setNavesFiltradasTripulado] = useState(dataTripulado);
  const [navesFiltradasLanzadera, setNavesFiltradasLanzadera] = useState(dataLanzadera);

  //fetch's a la api para obtener las naves no tripuladas, las naves tripuladas 
  //y las naves lanzadera y las guarda en los estados correspondientes.
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

  //funcion para filtrar las naves por el campo de busqueda y guardarlas en el state de 
  //navesFiltradasNoTripuladas, navesFiltradasTripulado y navesFiltradasLanzadera
  //para que se puedan usar en el componente Tbody.
  useEffect(() => {
    if (busqueda !== "") {
      setNavesFiltradas(
        dataNoTripulado.filter(nave => {
          return JSON.stringify(nave).toLowerCase().includes(busqueda.toLowerCase())}));
    }else{
      setNavesFiltradas(dataNoTripulado);
    } 

    if (busqueda !== "") {
      setNavesFiltradasTripulado(
        dataTripulado.filter(nave => {
          return JSON.stringify(nave).toLowerCase().includes(busqueda.toLowerCase())
        }));
    } else {
      setNavesFiltradasTripulado(dataTripulado);
    }

    if (busqueda !== "") {
      setNavesFiltradasLanzadera(
        dataLanzadera.filter(nave => {
          return JSON.stringify(nave).toLowerCase().includes(busqueda.toLowerCase())
        }));
    } else {
      setNavesFiltradasLanzadera(dataLanzadera);
    }
  }, [busqueda, dataNoTripulado, dataTripulado, dataLanzadera]);

  return (
    <Fragment>
      <h1 className="text-center title-style">Estación espacial Softka</h1>
      <div className="flex justify-between">
        <Button texto='Crear nave espacial' url="/crearNave" />
        <Busqueda setBusqueda={setBusqueda} busqueda={busqueda}/>
      </div>
      <div className="divider"></div>
      <div className="overflow-x-auto w-full">
        {loading ? (<Loading type='bars' />) : (
        <table className="table w-full ">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Tipo de vehiculo espacial</th>
              <th className="hidden sm:flex">Peso</th>
            </tr>
          </thead>
              <tbody className="animate__animated animate__backInUp">
              {navesFiltradasNoTripuladas.map(nave => {
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
              {navesFiltradasTripulado.map(nave => {
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
              {navesFiltradasLanzadera.map(nave => {
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