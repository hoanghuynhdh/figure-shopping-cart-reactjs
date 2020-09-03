import React, { Component } from 'react';
import {connect} from 'react-redux'
import { search } from '../../actions/index';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword : ''
        }
    }

    onHandleChange = (event) => {
        this.setState({
            keyword : event.target.value
        });
    }

    onSearch = () => {
        this.props.onSearch(this.state.keyword);
    }
    render() {
        return (
            <div className="input-group search">
                <input 
                    name="keyword"
                    value={this.state.keyword}
                    type="text"
                    className="form-control"
                    placeholder="Search for..."
                    onChange={this.onHandleChange}
                />
                <span className="input-group-btn">
                    <Button variant="outlined" onClick={this.onSearch}><SearchIcon /></Button>
                    {/* <button className="btn btn-default" type="button" onClick={this.onSearch}>
                        <SearchIcon />
                    </button> */}
                </span>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
    }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
      onSearch: (keyword) => {
          dispatch(search(keyword));
      }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Search);