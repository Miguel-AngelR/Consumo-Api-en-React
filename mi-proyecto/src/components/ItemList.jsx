import React from 'react';

const ItemList = ({ items, setSelectedItem }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} onClick={() => setSelectedItem(item)}>
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;