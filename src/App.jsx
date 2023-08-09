import { useState } from 'react';
/* module of placing foto of best players */
import Foto from './Foto.jsx'

export default function MyApp() {
  /* 'const' and f.'handleClick' in MyApp are to move the state 
  from the individual buttons “upwards” to share total clicks 
  The information you pass down like this is called props.*/

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    /* placing mutual foto and calling 4 times MyButton 
    for voting for 4 players */
    <div>
      
      <Foto /> 

      <MyButton count={count} onClick={handleClick} player = "Maradona"/>
      <MyButton count={count} onClick={handleClick} player = "Messi"/>
      <MyButton count={count} onClick={handleClick} player = "Pele"/>
      <MyButton count={count} onClick={handleClick} player = "Ronaldo"/>

    </div>
  );
}

function MyButton({ count, onClick, player }) {

  /* 'count_local, and f. 'handleClick_local' are fordeveloping 
  new/local counter that counts clicks on every seperate button */
  const [count_local, setCount_local] = useState(0);
  function handleClick_local(){
    setCount_local(count_local + 1);
  } 

  /* calc. % of voted */
  function localPercentage(count_local,count){
    
    return ((count_local / count * 100).toFixed(2)
    );       
  }
  
  return (
    /* using construction 'onClick={() => {onClick();handleClick_local()}}'
    in '<button>' allows to set two or more counters */
    <button onClick={() => {onClick();handleClick_local()}}>
      {player}<br/>Clicked {count_local} times ({localPercentage(count_local,count)}%)<br/>Totally voted {count}
    </button>
  );
}
