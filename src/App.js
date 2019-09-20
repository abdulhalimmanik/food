import React from 'react';
import './App.css';
import axios from 'axios';
import Search from './components/Search';
import Food from './components/Food';

class App extends React.Component {

  state = {recipes: []};

  onClickSearch = search => {
    
    axios.get(`https://www.food2fork.com/api/search?key=3fd71b76fd36502aa04f1e6fb19d9fc1&q=${search}`).then(function(response){
      if (response.data.recipes)
        this.setState({ recipes: response.data.recipes });
    }).then(function(error){
      console.log(error);
    });

  };
  

  render() {
    return (
        <div className="ui container">
          <Search onClickSearch={this.onClickSearch} />
          <Food recipes={this.state.recipes} />          
        </div>
    )
  }

}

export default App;