import React, { Component } from 'react'
import { connect } from 'react-redux'
import './css/filter.css'

import {setFilter} from './actions'

export class Filter extends Component {

    render() {
        return (
            <div className="searchBar">
                <span className="searchIcon">
                    &#9906;
                </span>
                <input value={this.props.searchTerm} onChange={this.props.onInputChange}/>

                <span className="brandName">
                    Dataminr
                </span>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    searchTerm: state.searchTerm
})

const mapDispatchToProps = (dispatch) => {
    return {
        onInputChange: (ev) => {
          dispatch(setFilter(ev.currentTarget.value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
