import React, { useEffect, useRef, useState } from "react";
import './styles.css'

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
      <GrowingButton />
    </div>
  );
}

const GrowingButton = () => {
  // KODUNUZ BURAYA GELECEK
  const [btnSize,setBtnSize]=useState(100)
  const[btnStatus,setBtnStatus]=useState(false)
  const intervalRef=useRef(null)

  const handleClick=()=>{ 
    const minSize = 50;
  const maxSize = 500;

    if(btnStatus){
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setBtnSize(prevSize => {
          
          if (prevSize <= minSize) {
            clearInterval(intervalRef.current);
            setBtnStatus(false);
            return minSize;
          }
          return prevSize - 10;
        });
      },50);
      setBtnStatus(false);
    }else{
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setBtnSize(prevSize => {
        
          if (prevSize >= maxSize) {
            clearInterval(intervalRef.current);
            setBtnStatus(true);
            return maxSize;
          }
          return prevSize + 10;
        });
      }, 50); 
      setBtnStatus(true);
    }
    
  }


  useEffect(() => {
   
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return(
    <>
    <button 
    onClick={handleClick}
    style={{width:`${btnSize}px`, height:`${btnSize}px`}}
    >{!btnStatus?'büyüt':'küçült'}</button>
    </>
  )

};

export default App;
