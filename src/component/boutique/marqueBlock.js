import React from 'react'
import { useEffect, useState } from 'react';

const MarqueBlock = (props) => {

  const marqueName= props.name;
  const id = "marqueBlock"+props.id;

  const [marqueBlock, setMarqueBlock] = useState(false);
  const [marqueIcon, setMarqueIcon] = useState(false);

  var classBlock = marqueIcon ?  "marqueIcon" : "marqueIconHide" ;
  var classBgdBlock = marqueBlock ? "marqueBlock "+marqueName+"Hide" : "marqueBlock "+marqueName;

  const showLogo = () =>{
    setMarqueIcon(true);
    setMarqueBlock(true);
  }
  const hideLogo = () =>{
    setMarqueIcon(false);
    setMarqueBlock(false);
  }

 

  useEffect(() => {
    const block = document.getElementById(id);
    block.addEventListener("mouseenter", showLogo);
    block.addEventListener("mouseleave", hideLogo);
  
    return () => {
      block.removeEventListener("mouseenter", showLogo);
      block.removeEventListener("mouseleave", hideLogo);
    }
  }, [])
  

  return (
    <div className={classBgdBlock} id={id} >
      <div className={classBlock} >
      <svg xmlns="http://www.w3.org/2000/svg">
            <path className='logoPath' d={props.path}></path>
        </svg>
      </div>
    </div>
  )
}

export default MarqueBlock