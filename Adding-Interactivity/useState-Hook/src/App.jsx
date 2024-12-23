
import { useState } from 'react';

const data = [
  {
    id:0,
    name:"Taj Mahal",
    description:"It is located in Agra, in india",
    moreInfo:"this is some additional info"
  },
  {
    id:1,
    name:"The great wall of china",
    description:"It is located in China, its length is 20,000km",
    moreInfo:"this is some additional info"
  },
  {
    id:2,
    name:"Statue of liberty",
    description:"It is located in New York, USA",
    moreInfo:"this is some additional info"
  }
]

let content = data.map(item =>{
  <ul>
    <li key = {item.id}>
      <h3>{item.name}  and {item.description}</h3>
    </li>
  </ul>
})


function App(){
  const [id, setId] = useState(0);
  const [more, setMore] = useState(" ");
  
  function handleClick(){
    setId(id +1);
    console.log(id)
  }
  function handleMore(){
    setMore(data[id].moreInfo);
  }
  return(
    <>
      <button onClick = {handleClick}>Next</button>
      <h2>{data[id].name}</h2>
      <h2>{data[id].description}</h2>
      <button onClick = {handleMore}> ShowMore</button>
      <h2>{more}</h2>
    </>
  )
}


export default App;