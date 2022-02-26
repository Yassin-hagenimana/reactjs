import React from "react"

export default function Api(){
    const[starWarsDta,setStarWarsData]=React.useState({})
    const{count,setCount}=React.useState(0)

    React.useEffect(function(){
        fetch(`https://swapi.dev/api/people/${count}`)
        .then(res=>res.json())
        .then(data=>setStarWarsData(data))
    },[count])

return(
 <div>
 <pre>{JSON.stringify(starWarsDta,null,2)}</pre>
 <h2>Count{count}</h2>
<button onClick={()=>setCount(prevCount=>prevCount+1)}>Add</button>

 </div>
)

}