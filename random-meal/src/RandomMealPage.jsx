import React from 'react';
import './RandomMealPage.css';
import { MealDetails } from './MealDetails';

export class RandomMealPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: undefined,
    };
  }

  componentDidMount() {
    this.fetchMeal();
  }

  fetchMeal() {
    this.setState({ meal: undefined });
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((res) => res.json())
      .then(({ meals }) => {
        this.setState({ meal: meals[0] });
      });
  }

  getRandomMeal = () => {
    this.fetchMeal();
  };

  render() {
    if (!this.state.meal) {
      return <h2>LOADING....</h2>;
    }
    return (
      <div className='App'>
        <button onClick={this.getRandomMeal}>Get Random Meal</button>
        <MealDetails meal={this.state.meal} />
      </div>
    );
  }
}
