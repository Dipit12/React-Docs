// rendering data from an array using the map function


const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];
// using the map function
let content = people.map(person =>{
  return(
    <ul>
      <li>{person}</li>
    </ul>
  )
})

// here print the data of people whose profession is a chemist
const persons = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];

let chemists = persons.filter(person =>{
  person.profession === 'chemist'
  return  person
})

let new_content = chemists.map(person =>{
  return(
    <ul> 
      <li>{person.name}</li>
    </ul>
  )
})

function App(){
  return(
    <>
      {content} <br></br>
      {new_content}
      
    </>
  )
    
}

export default App