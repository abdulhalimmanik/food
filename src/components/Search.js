import React from 'react';

class Search extends React.Component {
    
    state = { input: '' };

    onChangeSearch = (e) => {
        // e.preventDefault; 
        this.setState({ input: e.target.value })
    }

    render() {
        return (
            <div className="ui action fluid input wrap">
                <input type="text" value={this.state.input} onChange={this.onChangeSearch}  placeholder="Search here..."/>
                <button className="ui button" onClick={() => this.props.onClickSearch(this.state.input)} >Search</button>
            </div>
        )
    }

}

export default Search;

