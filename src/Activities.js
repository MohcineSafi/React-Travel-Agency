import React from "react";

const Activities = ({ listeactivite, onActivityClick }) => {
  return (
    <div className="gg">
      {listeactivite.map((activite, index) => (
        <div key={index} onClick={() => onActivityClick(index)}>
          <div>
            <img src={activite.img} alt={activite.name} />
            <h3>{activite.name} : {activite.prix} </h3>
          </div>
          <p > {activite.selectionné ? "☑" : " ☒ "}</p>
        </div>
      ))}
    </div>
  );
};

export default Activities;