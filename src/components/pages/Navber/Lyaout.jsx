import { Outlet } from "react-router-dom";
import Navber from "./Navber";


const Lyaout = () => {
    return (
        <>
         <Navber/>
         <Outlet/>
        </>
    )

};

export default Lyaout;