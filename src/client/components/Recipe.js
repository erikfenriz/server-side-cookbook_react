import React, {Component} from 'react';
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            recipe: this.props.recipe
        };
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleRemove() {
        this.props.removeRecipe(this.props.id);
    }

    toggleForm() {
        this.setState({isEditing: !this.state.isEditing});
    }

    handleUpdate(e) {
        e.preventDefault();
        this.props.updateRecipe(this.props.id, this.state.recipe);
        this.toggleForm();
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const {
            containerStyles,
            textStyles,
            buttonStyles,
            editFormStyles,
            editFormInputStyles,
            editFormButtonStyles
        } = styles;
        return this.state.isEditing ?
            (
                <div style={containerStyles}>
                    <form style={editFormStyles} onSubmit={this.handleUpdate}>
                        <textarea style={editFormInputStyles}
                                  name="recipe"
                                  value={this.state.recipe}
                                  onChange={this.handleChange}
                        />
                        <button style={editFormButtonStyles}>Save</button>
                    </form>
                </div>
            ) : (
                <div style={containerStyles}>
                    <p style={textStyles}>{this.props.recipe}</p>
                    <div>
                        <button style={buttonStyles} onClick={this.toggleForm}>
                            <FontAwesomeIcon icon={faEdit}/>
                        </button>
                        <button style={styles.buttonStyles} onClick={this.handleRemove}>
                            <FontAwesomeIcon icon={faTrash}/>
                        </button>
                    </div>
                </div>
            )
    }
}

const styles = {
    containerStyles: {
        display: 'flex',
        margin: '0 -3rem 4px',
        padding: '1.1rem 3rem',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(225,225,225,.1)'
    },
    textStyles: {
        whiteSpace: "pre-line"
    },
    buttonStyles: {
        border: 'none',
        fontSize: '1em',
        margin: '0.4em',
        background: 'none',
        cursor: 'pointer',
        color: "#ffffff"
    },
    editFormStyles: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    editFormInputStyles: {
        flexGrow: 1,
        border: 'none',
        background: "#f7f1f1",
        padding: '0 1.5em',
        fontSize: 'initial',
        height: 70
    },
    editFormButtonStyles: {
        padding: '0 1.3rem',
        background: "#48ff89",
        color: '#ffffff',
        textTransform: "uppercase",
        fontWeight: "bold",
        border: "1px solid rgba(225,225,225,.3)",
        marginLeft: 5
    }
};
