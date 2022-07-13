import ByMy from "components/ByMy";
import CrearNaveScreen from "pages/CrearNaveScreen";
import NaveLanzaderaScreen from "pages/NaveLanzaderaScreen";
import NaveNoTripuladaScreen from "pages/NaveNoTripuladaScreen";
import NaveTripuladaScreen from "pages/NaveTripuladaScreen";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";

const DashBoardRoutes = () => {
    return (
        <Fragment>
            <div>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/crearNave" element={<CrearNaveScreen />}/>
                    <Route path="/naveNoTripulada/:naveID" element={<NaveNoTripuladaScreen />} />
                    <Route path="/naveTripulada/:naveID" element={<NaveTripuladaScreen />} />
                    <Route path="/naveLanzadera/:naveID" element={<NaveLanzaderaScreen />} />
                </Routes>
            </div>
            <ByMy />
        </Fragment>
    )
}

export default DashBoardRoutes