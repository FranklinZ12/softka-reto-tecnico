import ByMy from "components/ByMy";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "../pages/HomeScreen";

const DashBoardRoutes = () => {
    return (
        <Fragment>
            <div>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                </Routes>
            </div>
            <ByMy />
        </Fragment>
    )
}

export default DashBoardRoutes