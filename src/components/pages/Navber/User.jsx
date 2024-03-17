
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import axios from 'axios';







const User = () => {

    let [user, setUser] = useState([]);

useEffect(() =>{

axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
    setUser(res.data)

});


}, []);


    return (
        <section>
            <div className="container ">
              
            {user.map((item) => (

            <div key={item.id} className="p-8 border w-fit my-6">   
            <h3>No. {item.id}</h3>
            <div className=" flex gap-5 items-center">
           <FaUser />
            <h2>Name: {item.name}</h2>
            </div>
           <h2>Email:{item.email}</h2>
           <h2>Phone:{item.phone}</h2>
           </div>



              ))}
            </div>
        </section>
    );
};

export default User;