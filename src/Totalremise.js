import React from "react";

const Totalremise = ({ listeactivite, nombreadultes }) => {
  const totalPrix = listeactivite.reduce((total, activite) => {
    if (activite.selectionné) {
      return total + activite.prix;
    }
    return total;
  }, 0);

  let remise = 0;

  if (nombreadultes < 4) {
    remise = 0.02;
  } else if (nombreadultes >= 4 && nombreadultes <= 8) {
    remise = 0.08;
  } else {
    remise = 0.1;
  }

  const totalAvecRemise = totalPrix * (1 - remise);

  return (
    <div>
      <h3>Remise : {remise * totalPrix}</h3>
      <h3>Total avec Remise: {totalAvecRemise} DH</h3>
    </div>
  );
};

export default Totalremise;
