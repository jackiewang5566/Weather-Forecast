import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
        // the instance of SearchBar component has a function onInputChange bind the this to onInputChange
        // and replace the old onInputChange function to avoid the this issue when using it as a callback
        this.onInputChange = this.onInputChange.bind(this);
    }


    onInputChange(event) {
        console.log(event.target.value);
        
        this.setState({ term: event.target.value });
    }

    render() {
        return (
            <form className="input-group">
                <input 
                    placeholder="Get a five-day forcast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}