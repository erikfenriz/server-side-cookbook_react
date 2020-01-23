import React, {Component} from 'react';
import {v4 as uuid} from 'uuid';

export default class NewRecipeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {recipe: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.recipe !== "") {
            this.props.createRecipe({...this.state, id: uuid()});
            this.setState({recipe: ""});
        }
    }

    render() {
        const {
            formStyles,
            formLabelStyles,
            formInputStyles,
            formButtonStyles
        } = styles;
        return (
            <form style={formStyles} onSubmit={this.handleSubmit}>
                <label style={formLabelStyles} htmlFor='recipe'>Your New Recipe</label>
                <textarea
                    style={formInputStyles}
                    type="text"
                    placeholder="new recipe"
                    id="recipe"
                    name="recipe"
                    value={this.state.recipe}
                    onChange={this.handleChange}
                />
                <button style={formButtonStyles}>Add</button>
            </form>
        )
    }
}

const styles = {
    formStyles: {
        marginTop: '3rem',
        display: 'flex',
        flexWrap: 'wrap'
    },
    formLabelStyles: {
        minWidth: '100%',
        marginBottom: '0.5rem',
        fontSize: '1.3rem'
    },
    formInputStyles: {
        flexGrow: 1,
        border: 'none',
        background: '#f7f1f1',
        padding: '0 1.5em',
        fontSize: 'initial',
        width: "100%",
        height: 70
    },
    formButtonStyles: {
        flex: 'auto',
        padding: '0 1.3rem',
        background: "#48ff89",
        color: '#ffffff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        border: "1px solid rgba(225,225,225,.3)",
    }
};
