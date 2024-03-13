import "./Friend.css"
export default function Friend({friend}){
const {id,name,email,username}=friend
console.log(friend)
    return(
        <div className="friend">
            <h2>id : {id}</h2>
            <h3>Name : {name} </h3>
            <h4>Username : {username} </h4>
            <p>Email : {email} </p>
        </div>
    )
 }