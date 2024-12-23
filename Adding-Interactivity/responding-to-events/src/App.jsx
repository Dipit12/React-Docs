import Button from "./Components/Button";
function App(){
  return(
  <>
    <div className = "Toolbar" onClick = { () =>{
      alert("Toolbar was clicked")
    }} width = "450px" height = "450px" style= {{backgroundColor: "red", width : "450px", height : "450px"}}>
    <Button text = "Play movie" message = "Movie is playing" />
    <Button text = "Upload image" message = "Image is uploading" />
    </div>
    
    
  </>
  )
}

export default App;