import { useEffect, useState } from 'react';
import api from '../services/api';
import './Users.css'

const Users = () => {
    const [users , setUsers] = useState([])


    const getUsers = () => {
        api.get("users")
        .then((response) => setUsers(response.data))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }

    useEffect(() => {
        getUsers()
    })

    return ( 
        <div>
           <h1> Users</h1>

           {users.map((user,index) => {
                return(
                    <div key={index} className="users">
                        <strong>{user.id}</strong>
                        <h3>{user.name}</h3>
                        <h4>{user.username}</h4>
                        <span>{user.email}</span>
                        <address>
                            {user.address.street} <br />
                            {user.address.suite} <br />
                            {user.address.city} <br />
                            {user.address.zipcode} <br />
                        </address>

                    </div>
                )
           })}
        </div>
     );
}
 
export default Users;
