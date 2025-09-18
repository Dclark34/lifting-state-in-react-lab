

//everytime you call a function and pass it data into it, you need an anonymous arrow function. line 12.



const IngredientList = (props) => {
  return <ul>
    {props.ingredients.map((ingredient, index) => (
      <li key={index} style={{ backgroundColor: ingredient.color}}>
            {ingredient.name}
            <button onClick={()=>props.addToBurger(ingredient)}>+</button>
      </li>
    ))
  }
  </ul>;
};

export default IngredientList;
