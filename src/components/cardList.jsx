import React, { Component } from "react";
import "../styles/cardListStyle.css";

const CardList = ({ monster }) => {
  console.log(monster);
  return (
    <div className="cardList">
      {monster.map((monster) => {
        return (
          <div key={monster.id} className="cardCont">
            <img
              alt="scarymonster"
              src={`https://robohash.org/${monster.id}?set=set2&size=180x150`}
            ></img>
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
