import { combineReducers } from 'redux'
import products from './products';
import cart from './cart';
import message from './message';
import search from './search';
import checkout from './checkout';
import nav from './nav';
import detail from './detail';
import home from './home';
const appReducers = combineReducers({
    products,
    cart,
    message,
    search,
    checkout,
    nav,
    detail,
    home
})

export default appReducers;