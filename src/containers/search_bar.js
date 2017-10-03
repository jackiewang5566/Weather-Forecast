import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
        // the instance of SearchBar component has a function onInputChange bind the this to onInputChange
        // and replace the old onInputChange function to avoid the this is undefined issue when using it as a callback
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }


    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();

        // fetch weather data
        this.props.fetchWeather(this.state.term);
        // clear the search bar
        this.setState({ term: '' });
    }

    render() {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
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

function mapDispatchToProps(dispatch) {
    // bind actionCreators with dispatch make sure that the action flows
    // down into the middleware and then reducers inside of our redux
    // application
    return bindActionCreators({ fetchWeather }, dispatch); 
}

// passing null for the first argument, since there is no mapStateToProps here,
// there is no need for redux maintaining some state here, this container don't
// need to this argument here, we don't need any state here.
export default connect(null, mapDispatchToProps)(SearchBar);