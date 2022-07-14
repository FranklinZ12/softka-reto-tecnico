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
                text="If a dog chews shoes whose shoes does he choose?"
                htmlf={'my-modal'}
            />
            <CardNave
                img={noTripulada}
                title="NAVES ESPACIALES NO TRIPULADAS"
                text="If a dog chews shoes whose shoes does he choose?"
                htmlf={'my-modal-1'}
            />
            <CardNave
                img={tripulada}
                title="NAVES ESPACIALES TRIPULADAS"
                text="If a dog chews shoes whose shoes does he choose?"
                tamaño={700}
                htmlf={'my-modal-2'}
            />
        </Fragment>
    )
}

export default CardList