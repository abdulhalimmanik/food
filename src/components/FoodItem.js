import React from 'react';
import axios from 'axios';

class FoodItem extends React.Component {

    state = { ingredients: [] };

    componentDidMount() {
        
        axios.get(`https://www.food2fork.com/api/get?key=3fd71b76fd36502aa04f1e6fb19d9fc1&rId=${this.props.recipe.recipe_id}`).then(response => {
            if (response.data.recipe.hasOwnProperty('ingredients'))  {
                this.setState({ ingredients: response.data.recipe.ingredients });
            }
        }).then(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="ui items wrap">
                <div className="item">
                    <div className="image">
                        <img src={this.props.recipe.image_url} alt={this.props.recipe.title} />
                    </div>
                    <div className="content">
                        <h3 className="ui blue header">{this.props.recipe.title}</h3>
                        <br /><br />
                        <h4 className="ui header">
                            Ingredients
                        </h4>
                        <div className="ui bulleted list">
                            {this.state.ingredients.map((ingredient) => {
                                return <div className="item" key={ingredient}>{ingredient}</div>
                            })}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
    
}

export default FoodItem;