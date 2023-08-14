import { useState } from 'react';   /* start meaning for counts */
import StarFoto from './StarFoto.jsx' /* placing foto */
import LocalPercentage from './LocalPercentage.jsx' /* calc. of procentage */

export default function MyApp() {

  /* 'count' and f.'handleClick' in MyApp are to move the state 
  from the individual buttons “upwards” to share total clicks 
  */
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  /* star0-star3 are indices for 'star_array' in module 'Foto' 
  */
  const [star0, setStar0] = useState(0);
  const [star1, setStar1] = useState(1);
  const [star2, setStar2] = useState(2);
  const [star3, setStar3] = useState(3);
 
  return (
    <div>
      <h1 style = {{textAlign: "center", color: "red", fontSize: "28px", marginBottom: "30px"}}>
        Who is the best football player? Click to vote 
      </h1>

      {/*  in f.'WorldStar': 
          1.we placed in one line: name of star, foto and button (using option 'flex') 
          2.we passed down menings of variables for subordinate functions
      */}
      <WorldStar count={count} onClick={handleClick} player = "___Maradona___" star_index = {star0}/>
      <WorldStar count={count} onClick={handleClick} player = "_____Messi____" star_index = {star1}/>
      <WorldStar count={count} onClick={handleClick} player = "_____Pele_____" star_index = {star2}/>
      <WorldStar count={count} onClick={handleClick} player = "____Ronaldo___" star_index = {star3}/> 
    </div>
  );

}
 
  function WorldStar ( {count, onClick, player,star_index} ) { 
      
    return (
      <>
        {/* How to place a players's info in one line? - using display: "flex" in <div>  
        */}  
        <div 
          style ={{display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px"
         }}>

          <h1 >{player}</h1>
          <StarFoto star_index = {star_index}/>

          {/* 1. In f."VotingButton' - calculating count_local, local 
                 and percentage(count_local/local) when clicking
              2. !!!Very important 'onClick={handleClick}' from version in Project_Voting
                 was replaced by 'onClick={onClick}' because this way we really pass meaning !!!
          */}
          <VotingButton count={count} onClick={onClick} player = {player}/>
        </div>
      </>
    );
  
  }

  function VotingButton({ count, onClick, player }) {

    /* 'count_local and f. 'handleClick_local' are for developing 
    new(local) counter that counts clicks for every separate button 
    */
    const [count_local, setCount_local] = useState(0);
    function handleClick_local(){
      setCount_local(count_local + 1);
    } 

    return (
      /* using construction 'onClick={() => {onClick();handleClick_local()}}'
      in '<button>' allows to set two counters:for total and for local counting
      */
      <button type="button" class="btn btn-light" onClick={() => {onClick();handleClick_local()}}>
        {player} <br/>

        Clicked {count_local} times <br/>

        {/* f.'localPercentage' calc. % local of total  voted 
        */}
        ({LocalPercentage(count_local,count)}%) <br/>

        Totally voted {count}
      </button>
    );

  }
   
