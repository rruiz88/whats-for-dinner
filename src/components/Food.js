import React from "react";
import foodData from "../foodData";

function Food() {
  const [food, setFood] = React.useState({
    randomImage: "https://www.memecreator.org/static/images/memes/3965070.jpg",
  });

  const [allFoodImages, setAllFoodImages] = React.useState([foodData]);

  function getFood() {
    const foodArray = foodData.data.foods;
    const randomNumber = Math.floor(Math.random() * foodArray.length);
    const url = foodArray[randomNumber].url;
    setFood((prevFood) => ({
      ...prevFood,
      randomImage: url,
    }));
    console.log(url);
  }

  return (
    <main>
      <div className="form">
        <button onClick={getFood} className="form--button">
          Random Food
        </button>
      </div>
      <div className="food">
        <img className="food--image" src={food.randomImage} />
      </div>
    </main>
  );
}

export default Food;
