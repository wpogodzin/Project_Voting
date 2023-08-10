import { useState } from 'react';

/* module to place foto of best players */
import Foto from './Foto.jsx'

export default function MyApp() {

  /* 'const' and f.'handleClick' in MyApp are to move the state 
  from the individual buttons “upwards” to share total clicks 
  The information you pass down like this is called props.*/
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  /*1+ How to place a players's info in one line - using "flex"*/
  return (
    <>
        <h1 style = {{textAlign: "center"}}>
          Who is the best football player? 
        </h1>

        <div style ={{display: "flex",
          justifyContent: "center",
          alignItems: "center"}}>

        <h1 >Players</h1>
        <Foto /> 
        <MyButton count={count} onClick={handleClick} player = "Players"/>

        </div>
    </>
  );
  /*1+ */

  /*1-
  return (
  1-*/ 


    /* 'Foto'placing mutual foto and calling 4 times MyButton 
     to vote for 4 players */
    /* in 'MyButton' we transfer data: count,onClick and player
     from up to down(props) */
  /*2-   
    <div>
  
      <Foto /> 

      <MyButton count={count} onClick={handleClick} player = "Maradona"/>
      <MyButton count={count} onClick={handleClick} player = "Messi"/>
      <MyButton count={count} onClick={handleClick} player = "Pele"/>
      <MyButton count={count} onClick={handleClick} player = "Ronaldo"/>

    </div>
  );
  2-*/
}
  
function MyButton({ count, onClick, player }) {

  /* 'count_local, and f. 'handleClick_local' are for developing 
  new(local) counter that counts clicks on every separate button */
  const [count_local, setCount_local] = useState(0);
  function handleClick_local(){
    setCount_local(count_local + 1);
  } 

  /* calc. % of voted */
  function localPercentage(count_local,count){  
    if (count == 0) {
      return 0;
    }
    else 
    { 
      return((count_local / count * 100).toFixed(2));
    }        
  }
  /* end calc. % of voted */

  return(

    /* using construction 'onClick={() => {onClick();handleClick_local()}}'
    in '<button>' allows to set two or more counters */
    <button onClick={() => {onClick();handleClick_local()}}>
      {player} <br/>
      Clicked {count_local} times ({localPercentage(count_local,count)}%) <br/>
      Totally voted {count}
    </button>
  );
}
