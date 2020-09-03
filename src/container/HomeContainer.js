import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { actAddToCart } from '../actions/index';
import Home from '../components/Home/Home';
import HomeItems from '../components/Home/HomeItems';
class HomeContainer extends Component {
    render() {
        var { products,onAddToCart } = this.props;
        
        return (
            <Home onAddToCart = {onAddToCart}>
                { this.showProducts(products) }
            </Home>
        );
    }
    showProducts(products) {
        var result = null;
        var { onAddToCart } = this.props;
        if(products.length > 0) {
            result = products.map((product,index) => {
            return <HomeItems 
                key={index} 
                product={product} 
                onAddToCart = {onAddToCart} />
            })
        }
        return result;
    }
}

HomeContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.string.isRequired,
            name : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            size : PropTypes.string.isRequired,
            author : PropTypes.string.isRequired,
            series : PropTypes.string.isRequired,
            released : PropTypes.string.isRequired,
            productType : PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
            imageDetail : PropTypes.string.isRequired,
            imageDetail2 : PropTypes.string.isRequired,
        })
    ).isRequired,
    onAddToCart : PropTypes.func.isRequired,
}
const mapStateToProps = state => {
    return {
      products : state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        },
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);