import { useState } from 'react';
import PhotoGallery from './components/PhotoGallery';

// rendering from a list
const todos = [
  {
    name:"Dipit",
    age:19
  },
  {
    name:"Tithi",
    age:19
  },
  {
    name:"Aarav",
    age:20
  }
]

let content = {}

content = todos.map(todo =>{
  return(
    <ul>
      <li>Your name is {todo.name}</li>
      <li>Your age is {todo.age}</li>
    </ul>
  )
})

// comdition rendering
let exlusiveContent = {};

exlusiveContent = todos.map(todo => {
  if(todo.age > 19){
    return(
      <ul>
        <li>Your name is {todo.name}</li>
      </ul>
    )
  }
})
function App(){
  return(
    <>
      <h1>Welcome to my PhotoGallery</h1>
      <PhotoGallery />
      <PhotoGallery />
      <PhotoGallery />

      { content }
      { exlusiveContent }
    </>
  );
}


export default App;
