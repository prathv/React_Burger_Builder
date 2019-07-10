import React , { Component } from 'react'
import Aux  from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat : 0.3,
    bacon : 0.8
};


class BurgerBuilder extends Component {


    state = {
        ingredients : {salad:0,bacon:0,cheese:0,meat:0},
        totalPrice : 4
    }

    removeIngredientHandler = (type) => {
        console.log("removed is clicked");
        if(this.state.ingredients[type] > 0) {

            const oldCount = this.state.ingredients[type];
            const updatedCount = oldCount - 1;
            const updatedIngredients = {...this.state.ingredients};
            updatedIngredients[type] = updatedCount;
            const priceReduction = this.state.totalPrice - INGREDIENT_PRICES[type];
            this.setState({totalPrice: priceReduction, ingredients: updatedIngredients});
            console.log(this.state);
        }
    };

    addIngredientHandler = (type) => {
        console.log("added is clicked");
            const oldCount = this.state.ingredients[type];
            const updatedCount = oldCount + 1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = updatedCount;
            const priceAddition = INGREDIENT_PRICES[type] + this.state.totalPrice;
            this.setState({totalPrice: priceAddition, ingredients: updatedIngredients});
            console.log(this.state);
    };

    render() {

        const disabledInfo = {
            ...this.state.ingredients
        };

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientsAdded={this.addIngredientHandler} ingredientsRemoved={this.removeIngredientHandler} disabled={disabledInfo}/>
            </Aux>
        )
    }

}

export default BurgerBuilder
