import React from "react";

export const CentreInteret = () => {
  const tabInteret = [
    {  inter: "Lecture" },
    {  inter: "Peinture" },
    {   inter: "Musique " },
   
  ];
  return (   
    <div  className="fixeCentreInteret">
        <div className="centreInteret" >Centre d’intérêt </div>
       {tabInteret.map((el)=>(
          <div className="interet">
               <div> <i class="fa-brands fa-slack"></i></div>
            <div> {el.inter}</div>
          </div>

       ) )} 
       
  </div>
  ) 
};
