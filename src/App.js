import React from 'react';
import './App.css';



class App extends React.Component {

  state = {
    ingredients: [],
    menuShowing: true
  }

  // handleTomatoClick = () => {
  //   // here is the catch, whenver you update state react wants you to make copies
  //   // primitives, necessary for performance
  //   // immutable update patterns
  //   // let newIngredients = this.state.ingredients.slice(0)
  //   // newIngredients.push('tomato')

  //   this.setState({
  //     ingredients: [...this.state.ingredients, 'tomato']
  //   })
  // }

  // handleCheeseClick = () => {
  //   this.setState({
  //     ingredients: [...this.state.ingredients, 'cheese']
  //   })
  // }

  // handleLettuceClick = () => {
  //   this.setState({
  //     ingredients: [...this.state.ingredients, 'lettuce']
  //   })
  // }

  // handleBunClick = () => {
  //   this.setState({
  //     ingredients: [...this.state.ingredients, 'bun']
  //   })
  // }

  // handleMeatClick = () => {
  //   this.setState({
  //     ingredients: [...this.state.ingredients, 'meat']
  //   })
  // }

  removeIngredient = (index) => {
   console.log(index)
   this.setState({
     ingredients: this.state.ingredients.filter((ingredient, i) => index !== i)
   }) 
  }

  addIngredient = (ingredient) => {
    this.setState({
      ingredients: [...this.state.ingredients, ingredient]
    })
  }

  createLayer = (ingredient, i) => {
    return (
    <div className={ingredient} onClick={() => this.removeIngredient(i)} key={i}>
      {ingredient}
    </div> 

    )
  }

  handleToggle = event => {
    this.setState({
      menuShowing: !this.state.menuShowing
    })
  }

  render() {
    // var menuShowing = this.state.menuShowing
    // var ingredients = this.state.ingredients
    const { menuShowing, ingredients } = this.state

    return (
      <div className="App">
        <button onClick={this.handleToggle}>toggle hide/show</button>

        {menuShowing && 
          <section>
            <button onClick={() => this.addIngredient("bun")}>add bun</button>
            <button onClick={() => this.addIngredient("lettuce")}>add lettuce</button>
            <button onClick={() => this.addIngredient("tomato")}>add tomato</button>
            <button onClick={() => this.addIngredient("cheese")}>add cheese</button>
            <button onClick={() => this.addIngredient("meat")}>add meat</button>
          </section>}

        <section>
          {ingredients.map(this.createLayer)}
        </section>
  
      </div>
    );
  }
}

export default App;





// var fruits = [
//   'banana',
//   'apple',
//   'kiwi',
//   'orange'
// ]

// function App() {
//   return (
//     <div className="App">
//       {fruits.map(fruit => {
//         return <h3>{fruit}</h3>
//       })}
//     </div>
//   );
// }

// export default App;
