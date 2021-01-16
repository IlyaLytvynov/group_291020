export const MealDetails = (props) => {
  const { strMeal, strInstructions, strMealThumb } = props.meal;
  return (
    <div>
      <h1>{strMeal}</h1>
      <p>{strInstructions}</p>
      <img src={strMealThumb} alt='' />
    </div>
  );
};
