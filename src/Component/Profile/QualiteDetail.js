import React from "react";

export const QualiteDetail = () => {
  const tabQaulity = [
    {  qa: "Empathie" },
    {  qa: "Esprit d'équipe " },
    { qa: "Capacité d'adaptation" },
    {  qa: "Esprit d'analyse" },
  ];

  return (
    <div className="fixeQualiteDetail">
        <div className="QualiteDetail"> Qualités :</div>
      {tabQaulity.map((el) => (
        <div className="Qualite">
          <div> <i class="fa-brands fa-slack"></i></div>
          <div>{el.qa}</div>
        </div>
      ))}
    </div>
  );
};
