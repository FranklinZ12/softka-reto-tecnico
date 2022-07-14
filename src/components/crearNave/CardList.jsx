import React, { Fragment } from 'react'
import CardNave from './CardNave';
import lanzadera from 'assets/lanzadera.jpg';
import noTripulada from 'assets/noTripulada.jpg';
import tripulada from 'assets/tripulada.jpg';

const CardList = () => {
    return (
        <Fragment>
            <CardNave
                img={lanzadera}
                title="VEHÍCULOS LANZADERA"
                text="Como su propio nombre indica, se trata de un cohete autopropulsado que sirve para lanzar una carga útil al espacio."
                htmlf={'my-modal'}
            />
            <CardNave
                img={noTripulada}
                title="NAVES ESPACIALES NO TRIPULADAS"
                text="En cuanto a naves no tripuladas se refiere, su principal objetivo estriba en estudiar otros cuerpos celestes. Por eso las primeras de la historia tenían como finalidad estudiar a nuestro satélite natural."
                htmlf={'my-modal-1'}
            />
            <CardNave
                img={tripulada}
                title="NAVES ESPACIALES TRIPULADAS"
                text="Resulta meridiano que su propósito consiste en mandar seres humanos al espacio para tareas de reparación, mantenimiento o investigación."
                tamaño={700}
                htmlf={'my-modal-2'}
            />
        </Fragment>
    )
}

export default CardList