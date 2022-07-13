import Busqueda from "components/Busqueda"
import CrearNave from "components/CrearNave"
import { Fragment } from "react"

const HomeScreen = () => {
  return (
    <Fragment>
      <h1 className="text-center title-style">Estación espacial Softka</h1>
      <div className="flex justify-between">
        <CrearNave />
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
          <tbody>
            {/* <!-- row 1 --> */}
            <tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
              </td>
              <td>este es el peso</td>
              <th>
                <button className="btn btn-ghost btn-xs">Detalles</button>
              </th>
            </tr>
          </tbody>         
        </table>
      </div>
    </Fragment>
  )
}

export default HomeScreen