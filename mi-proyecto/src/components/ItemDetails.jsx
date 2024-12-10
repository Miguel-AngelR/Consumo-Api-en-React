import React from 'react';

const ItemDetails = ({ item }) => {
  return (
    <div>
      <h2>Detalles</h2>
      <p><strong>ID:</strong> {item.id}</p>
      <p><strong>Título:</strong> {item.title}</p>
      <p><strong>Contenido:</strong> {item.body}</p>
    </div>
  );
};

export default ItemDetails;