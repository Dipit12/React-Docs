// import { useState } from 'react';

// function App() {
//   const [name, setName] = useState('');
//   const [data, setData] = useState([]);

//   function handleChange(e) {
//     setName(e.target.value);
//   }

//   function handleClick() {
//     if (name.trim() !== '') {
//       setData((prevData) => [...prevData, name]); // Use functional state update
//       setName(''); // Clear the input field after adding
//     }
//   }

//   return (
//     <>
//       <input type="text" value={name} onChange={handleChange} />
//       <button onClick={handleClick}>Add</button>
//       <ul>
//         {data.map((item, index) => (
//           <li key={index}>{item}</li> // Add a key for each list item
//         ))}
//       </ul>
//     </>
//   );
// }

// export default App;

import { useState } from 'react';

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

export default function List() {
  const [artists, setArtists] = useState(
    initialArtists
  );

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => {
              setArtists(
                artists.filter(a =>
                  a.id !== artist.id
                )
              );
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
