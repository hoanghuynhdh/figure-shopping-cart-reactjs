import React, { Component } from 'react';
import { connect } from 'react-redux'
import Detail from '../components/Detail/Detail';
import PropTypes from 'prop-types';
import { actAddToCart } from '../actions/index';
class DetailContainer extends Component {
    render() {
        var { products } = this.props;
        return (
            <Detail>
                { this.showDetail(products) }
            </Detail>
        );
    }
    showDetail(products) {
        var result = null;
        if(products.length > 0) {
          result = products.map((product,index) => {
            return <Detail 
              key={index} 
              product={product} />
          })
        }
        return result;
      }
}

DetailContainer.propTypes = {
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
      products : state.products,
    }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
      onAddToCart: (product) => {
          dispatch(actAddToCart(product, 1));
      },
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(DetailContainer);