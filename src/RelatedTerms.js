import React, { Component } from 'react'
import { connect } from 'react-redux'

import {setFilter} from './actions'


export class RelatedTerms extends Component {
    constructor(props) {
		super(props);
	
		this.state = {
		    terms: ["fire","New","earthquake","party","accident"]	
		};
	  }

    render() {
        return (
            <div className="relatedTerms">
                {this.state.terms.map((term, i) => 
                
                    <span data-term={term} className="term" key={"term"+i} onClick={this.props.onTermClick}>
                        <span className="searchIcon">
                            &#9906;
                        </span>{term}
                    </span>
                )}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTermClick: (ev) => {
          dispatch(setFilter(ev.currentTarget.dataset.term))
        }
    }
}

export default connect(null, mapDispatchToProps)(RelatedTerms)
