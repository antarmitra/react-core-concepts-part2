import { useEffect, useState } from "react"

export default function Users(){
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    })

    const userBox = {
        border: '2px solid blue',
        marginBottom: '10px'
    }
    return(
        <div style={userBox}>
            <h3>Users: {users.length}</h3>
        </div>
    )
}