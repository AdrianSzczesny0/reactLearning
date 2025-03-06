import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Card = ({title}) =>{
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    let message;
    hasLiked ? message = `${title} move has been Liked`: message = `${title} move has been Unliked`;
    console.log(message);
  });

  return (
    <div className='card'>
      <h2>{title}</h2>
      <button onClick = { () => setHasLiked(!hasLiked)}>
        {hasLiked ? 'Liked' : 'Like'}
      </button>
    </div>
  )
}


const App = () =>{
  return (
    <div className='card-container'>
      <Card title= "Avatar"/>
      <Card title= "Terminator"/>
      <Card title= "Star Wars"/>
      <Card title= "Batman"/>
    </div>
  )
}
export default App
