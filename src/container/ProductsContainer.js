import React, { Component } from 'react';
import { connect } from 'react-redux'
import Product from '../components/Product/Product';
import Items from '../components/Product/Items';
import PropTypes from 'prop-types';
import { actAddToCart, actChangeMessage } from '../actions/index';

class ProductsContainer extends Component {
    render() {
        var { products,keyword,onAddToCart } = this.props;
        products = products.filter((task) => {
          return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
        })
        return (
            <Product onAddToCart = {onAddToCart}>
                { this.showProducts(products) }
            </Product>
        );
    }
    showProducts(products) {
        var result = null;
        var { onAddToCart, onChangeMessage } = this.props;
        if(products.length > 0) {
          result = products.map((product,index) => {
            return <Items 
              key={index} 
              product={product} 
              onAddToCart = {onAddToCart}
              onChangeMessage = {onChangeMessage}/>
          })
        }
        return result;
      }
}
ProductsContainer.propTypes = {
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
  onChangeMessage : PropTypes.func.isRequired
}
const mapStateToProps = state => {
    return {
      products : state.products,
      keyword : state.search
    }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
      onAddToCart: (product) => {
          dispatch(actAddToCart(product, 1));
      },
      onChangeMessage : (message) => {
          dispatch(actChangeMessage(message));
      }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer);