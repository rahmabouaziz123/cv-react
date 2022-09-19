import React from "react";

export const InfoDetail = () => {
  const tabInfo = [
    { name: "Né le ", specialite: "03/01/1997" },
    { name: "Téléphone ", specialite: ":51974802" },
    { name: "Email ", specialite: ":bouazizrahma5@gmail.com" },
    { name: "Permis", specialite: "B" },
  ];

  return (
    <div className="fixeInfoTotale">
      {tabInfo.map((el) => (
        <div className="infoDetail">
          <div> {el.name}</div>
          <div> {el.specialite}</div>
        </div>
      ))}
    </div>
  );
};
