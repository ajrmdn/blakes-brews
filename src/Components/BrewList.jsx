import React from "react";
import Brew from "./Brew";

var masterBrewList = [

  {
    name: 'Morning Brew',
    flavor: 'Wake up with Lake',
    brand: 'Blake Brews',
    price: '$3'
  },

  {
    name: 'Mid-Day Brew',
    flavor: 'Break with Lake',
    brand: 'Blake Brews',
    price: '$3'
  },

  {
    name: 'After Class Brew',
    flavor: 'Lake',
    brand: 'Blake Brews',
    price: '$3'
  },

  {
    name: 'Whenever Brew',
    flavor: 'Ice Cold Lake',
    brand: 'Blake Brews',
    price: '$3'
  },

  {
    name: 'Napping With Cord',
    flavor: 'Decaf Naps',
    brand: 'Blake Brews',
    price: '$2'
  },

];

function BrewList() {
  return (
    <div>
      <hr />
      {masterBrewList.map((Brew, index) =>
        <Brew name={brew.name}
          flavor={brew.flavor}
          brand={brew.brand}
          price={brew.price}
          key={index} />
      )}
    </div>
  );
};




export default BrewList;
