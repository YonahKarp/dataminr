import React, { Component } from 'react'
import { connect } from 'react-redux'
import './css/filter.css'

import {setFilter} from './actions'

export class Filter extends Component {

    onInputChange(e){
        console.log(e.currentTarget.value)
    }


    render() {
        return (
            <div className="searchBar">
                <span className="searchIcon">
                    &#9906;
                </span>
                <input onChange={this.props.onInputChange}/>

                <span className="brandName">
                    Dataminr
                </span>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => {
    return {
        onInputChange: (ev) => {
         console.log(ev.currentTarget.value)
          dispatch(setFilter((e) => e.content.toLowerCase().includes(ev.currentTarget.value.toLowerCase())))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
