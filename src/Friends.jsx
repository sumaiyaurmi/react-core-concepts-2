import { useEffect, useState } from "react"
import "./Friend.css"
import Friend from "./Friend"

export default function Friends(){

     const [friends,setFriends]=useState([])

useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => setFriends(data))

} ,[])

    return(
        <div className="friend">
            <h3>Friend : {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}


/*
1.State to hold data
2.use effect with dependancy array
3. use fetch to load data
4. set loaded data to the state

*/ 