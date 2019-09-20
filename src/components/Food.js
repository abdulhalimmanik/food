import React from 'react';
import FoodItem from './FoodItem';

const Food = props => {
    
    if(props.recipes.length) {
        return (
            <div className="ui one column doubling grid container">
                {
                    props.recipes.map((recipe) => {
                        return <FoodItem recipe={recipe} key={recipe.title} />
                    })
                }
            </div>

        );    
    }

    return (
        <div className="ui one column container wrap">
            
        </div>
    )

}

export default Food;