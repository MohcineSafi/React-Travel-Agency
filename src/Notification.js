import React from 'react';

const Notification = ({ listeactivite }) => {
  const act_sel = listeactivite.filter(activite => activite.selectionné);

  let m = '';

  if (act_sel.length === 0) {
    m = '0 activité sélectionnée.';
  } 
   else {
    m = `${act_sel.length} activité(s) sélectionnée(s).`;
  }

  return (
    <div>
      <p>{m}</p>
    </div>
  );
};

export default Notification;