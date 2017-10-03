import { FETCH_WEATHER } from '../actions/index';

// setting initial state to an empty array, because we can have multiple data coming back
export default function (state = [], action) {
    // concat doesn't change the existing array, it creates a new array that includes the old 
    // stuff and new stuff in here
    switch (action.type) {
        case FETCH_WEATHER:
            // don't manipulating the exising array, the old state
            // return state.concat([action.payload.data]); // identical to below es6 syntax
            return [action.payload.data, ...state]; // [city, city, city] NOT [city, [city, city]]
    }
    return state;
}