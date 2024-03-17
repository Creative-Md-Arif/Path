import { Link } from "react-router-dom";
import { CiStopwatch } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { FaMotorcycle } from "react-icons/fa6";


const Navber = () => {
    return (
    <>
       <nav className="bg-[#CC3333]">
        <div className="container flex justify-between items-center">
            <div className="flex items-center gap-28 py-3">
                <p className="flex items-center text-white font-medium "> <span className="text-white text-2xl pr-2"> <CiStopwatch /></span> 7.30 AM - 9.30 PM</p>
                <p className="flex items-center  text-white font-medium"> <span className="text-white text-2xl pr-2"> <FaPhoneAlt /></span> +880 1630 225 015</p>              
            </div>
            <div className="text-white font-semibold transition hover:text-black "><Link to="/register">Register</Link></div>
        </div>
       </nav>
      <nav className=" bg-[#FFF8EE] py-6">          
            <div className="container flex items-center justify-between">              
                <h1><Link to="/"><img src="/public/nav-logo.png" alt="" /></Link></h1>
                <ul className="flex pl-52 gap-10 text-xl font-bold">
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/items">Items</Link>
                    </li>
                    <li>
                        <Link to="/pages">Pages</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/user">User</Link>
                    </li>
                   
                </ul>
                <div className=" text-6xl text-white bg-black p-2 rounded-full"><Link to="/cart"><IoMdCart /></Link></div>
                <div className="flex items-center">
                  <div>
                    <h5 className="text-black font-bold text-xl">Delivery Order</h5>
                    <p className="text-black font-medium text-sm">+880 1630 225 015</p>
                   </div>
                   <div className="text-6xl"><FaMotorcycle /></div>
                </div>
                <div className=" py-4 px-8 bg-red-700 rounded-2xl text-white text-2xl font-medium "><Link to="/login">Login</Link></div>
            </div>
        </nav>
    </>
    );
};

export default Navber;