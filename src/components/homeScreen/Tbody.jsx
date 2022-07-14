import { Fragment } from "react";

const Tbody = ({ nombre, pais, tipo, peso}) => {
  return (
    <Fragment>
          <td>
              <div className="flex items-center space-x-3">
                  <div>
                      <div className="font-bold">{nombre}</div>
                      <div className="text-sm opacity-50">{pais}</div>
                  </div>
              </div>
          </td>
          <td>{tipo}</td>
          <td className="hidden sm:flex">{peso}{tipo === 'Nave robótica'? '(kg)':'(TON)'}</td>
      </Fragment>
  )
}

export default Tbody