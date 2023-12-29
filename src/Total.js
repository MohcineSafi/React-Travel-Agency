import React from 'react';

const Total = ({ listeactivite }) => {
  const total = listeactivite.reduce((total, activite) => {
    if (activite.selectionné) {
      total += activite.prix;
    }
    return total;
  }, 0);

  return (
    <div>
      <h2>Total pour une personne : {total} DH</h2>
    
    </div>
  );
};

export default Total;