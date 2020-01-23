import React, {Component} from 'react';
import Recipe from './Recipe';
import NewRecipeForm from "./NewRecipeForm";
import {v4 as uuid} from 'uuid';

export default class RecipesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [...demoData]
        };
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
    }

    add(newRecipe) {
        this.setState({
            recipes: [...this.state.recipes, {...newRecipe}]
        })
    }

    remove(id) {
        this.setState({
            recipes: this.state.recipes.filter(item => item.id !== id)
        });
    }

    update(id, updatedRecipe) {
        const updatedRecipesList = this.state.recipes.map(item => {
            return item.id === id ?
                {...item, recipe: updatedRecipe} : item
        });
        this.setState({recipes: updatedRecipesList})
    }

    render() {
        const recipes = this.state.recipes.map((item) =>
            <Recipe key={item.id}
                    id={item.id}
                    recipe={item.recipe}
                    removeRecipe={this.remove}
                    updateRecipe={this.update}
            />);
        return (
            <div style={styles.containerStyle}>
                <h1 style={styles.headingStyle}>Cook Book</h1>
                <div>
                    {recipes}
                </div>
                <NewRecipeForm createRecipe={this.add}/>
            </div>
        )
    }
}

const styles = {
    containerStyle: {
        margin: "4rem auto",
        maxWidth: 900,
        padding: "2rem 3rem 3rem",
        background: '#7aacff',
        color: '#ffffff',
    },
    headingStyle: {
        fontWeight: 'normal',
        fontSize: "2.6rem",
        letterSpacing: "0.05em",
        borderBottom: '1px solid #eeeeee',
    }
};

const demoData = [
    {recipe: 'Taco', id: uuid()},
    {recipe: 'Sushi', id: uuid()}
];
