import React from "react";
import imgBiat from "../../images/biat.PNG";

import imgabs from "../../images/abs.PNG";
import imgcrda from "../../images/crda.PNG";

export const StageProf = () => {
  const tabStage = [
    {
      // cas public image  dans object
      logo:    "images/mtd.PNG",   
      date: "Février 2019_Avril 2019 ",
      lieu: "Stage PFE en MTD GROUP ",
      parag: `Conception et Réalisation d’une application Web  de gestion des taches des commerciaux du comptoir de bois et matériaux Sfax .
    `,
    },
    {
      // cas src image dans object  avec import
      logo:  imgabs,
      date: "Aout 2018_septembre 2018 ",
      lieu: "Stage PFA en ABS computer ",
      parag:
        "Conception et Réalisation d’une application bureautique de gestion des projet (WinDev)",
    },
    {
      logo: imgcrda,
      date: "Aout 2017 _septembre 2017 ",
      lieu: "Stage en Commissariat régional au développement agricole (CRDA)   Sfax  ",
      parag: `	Connaissance des logiciels de la gestion 
   	Connaissance le système d’information 
    Connaissance le système de disposition des biens meubles de l'État
    Préparation et traitement des rapports annuels 
    `,
    },
  ];

  return (
    <div className="StageProfessionnel">
      <div> Stages</div>
      {tabStage.map((el) => (
        <div>
          <div>
        
            <img src={el.logo} alt="" className="imgStage" />
          </div>

          <div> {el.date}</div>
          <div> {el.lieu}</div>
          <div> {el.parag}</div>
        </div>
      ))}
    </div>
  );
};
