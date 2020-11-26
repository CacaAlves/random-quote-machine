import quoteIndexCreator from '../actions/quoteIndexCreator';
import quoteArr from './../../components/quoteArr';

const GENERATE_QUOTE = 'GENERATE_QUOTE_INDEX';
const quoteIndexReducer = (state = 0, action) => {
    switch (action.type) {
        case GENERATE_QUOTE:
            const newIndex = Math.floor(Math.random() * quoteArr.length);
            return newIndex;

        default:
            return state;
    }
}

export default quoteIndexReducer;