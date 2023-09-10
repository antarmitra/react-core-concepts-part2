export default function Friend({friend}){
    console.log(friend)
    return(
        <div className="box">
            <p>Id: {friend.id}</p>
            <p>Name: {friend.name}</p>
            <p>UserName: {friend.username}</p>
            <p>Email: {friend.email}</p>
        </div>
    )
}