import React from "react";

export const LangueDetail = () => {
  const tablang = [
    { name: "Arabe  ", la: ": langue maternelle" },
    { name: "Francais", la: ":courant" },
    { name: "Anglais", la: ":niveau intermédiaire" },
     ];

  return (  <div className="fixeLangueDetail">

    <div> Langues </div>
    {tablang.map((el)=>(
     <div className="LangueDetail">
        <div> {el.name}</div>
        <div> {el.la}</div>
     </div>
    ))}
  </div>
  )
};
