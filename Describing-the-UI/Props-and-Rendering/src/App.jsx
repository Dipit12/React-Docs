import Props from "./components/Props";
import Condition from "./components/Condition";
function App(){
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = "Gregorio Y. Zara"

  const obj = {
    name: "Dipit",
    about_me:{
      age:19,
      fav_color:"blue"
    }
  }

  return(
    <>
      <img src = {avatar} alt = {description} />
      <ul style = {{ // we put in an object in {{}}
        backgroundColor: 'lightblue',
        color:'white'
      }}
      
        
      >

        <li>Hi there</li>
        <li>this is a list</li>
      </ul>
      <h1>My fav color is {obj.about_me.fav_color}</h1>
      
      <Props name = "Dipit" age = "19" />
      

      <Condition item = "bag" isPacked = {true} />
      <Condition item = "books" isPacked = {false} />
    </>
  )
}

export default App;