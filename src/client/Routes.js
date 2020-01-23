import React from 'react';
import {Route} from 'react-router-dom';
import App from './components/RecipesList';

export default () => {
    return (
        <div>
            <Route exact path="/" component={App}/>
        </div>
    )
};
