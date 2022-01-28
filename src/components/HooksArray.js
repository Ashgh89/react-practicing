import { useState } from "react";

const HooksArray = () => {
  const [items, setItem] = useState([]);

  const addItemHandler = () => {
    // setItem Array => ?
    setItem([
      ...items,
      { id: items.length, number: Math.floor(Math.random() * 10) },
    ]);
  };

  //-----------ODER------------

  const addItemHandler2 = () => {
    const addedItem = {
      id: items.length,
      number: Math.floor(Math.random() * 10),
    };
    const updatedItems = [...items, addedItem];
    setItem(updatedItems);
  };

  //-----------------------------
  return (
    <div>
      <button onClick={addItemHandler}>Add Item</button>
      {items.map((item) => {
        return <li key={item.id}>{item.number}</li>;
      })}
    </div>
  );
};

export default HooksArray;
