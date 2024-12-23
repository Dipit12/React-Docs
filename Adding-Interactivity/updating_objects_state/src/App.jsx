import { useState } from 'react';

export default function App() {
  // const [position, setPosition] = useState({
  //   x: 0,
  //   y: 0
  // });
  // return (
  //   <div
  //     onPointerMove={e => {
  //       setPosition({
  //         x: e.clientX,
  //         y: e.clientY
  //       });
  //     }}
  //     style={{
  //       position: 'relative',
  //       width: '100vw',
  //       height: '100vh',
  //     }}>
  //     <div style={{
  //       position: 'absolute',
  //       backgroundColor: 'red',
  //       borderRadius: '50%',
  //       transform: `translate(${position.x}px, ${position.y}px)`,
  //       left: -10,
  //       top: -10,
  //       width: 20,
  //       height: 20,
  //     }} />
  //   </div>
  // );

  const [data, setData] = useState({
    firstName:'Dipit',
    lastName: 'Madan',
    email: 'dipitmadan@gmail.com'
  });

  function handleFirstNameChange(e){
    setData({
      ...data,
      firstName: e.target.value
    })
  }
  function handleLastNameChange(e){
    setData({
      ...data,
      lastName: e.target.value
    })
  }
  function handleEmailChange(e){
    setData({
      ...data,
      email: e.target.value
    })
  }
  return(
    <>
    <label>First Name </label>
    <input type = "text" value = {data.firstName} onChange = {handleFirstNameChange} />
    <label>Last Name </label>
    <input type = "text" value = {data.lastName} onChange = {handleLastNameChange} />
    <label>Email</label>
    <input type = "text" value = {data.email} onChange = {handleEmailChange} />
    <p>Hi your first name is {data.firstName}, your last name is {data.lastName} and your email is {data.email}</p>
    </>
  );



}
