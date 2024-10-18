

import { useEffect, useState } from "react"
import Single from "./Single"

export default  function Newfun(){
    const [count,setCount] = useState([])
        useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res=>res.json())
            .then(data=>setCount(data))
        },[])
    
    return (<div>
        <h1>container:{count.length}</h1>
        {
            count.map((friend)=><Single datas={friend}></Single>)
        }
        </div>
     )
}