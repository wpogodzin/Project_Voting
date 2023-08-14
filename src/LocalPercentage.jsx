  /* module localPercentage
  */  
  export default function LocalPercentage(count_local,count){  
    if (count == 0) {
    return 0;        /* to avoid dividing by 0 */
      }
    else 
      { 
        return((count_local / count * 100).toFixed(2));
      }        
    }
   
  