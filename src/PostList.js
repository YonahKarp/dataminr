import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import Post from './Post';

import { connect } from 'react-redux'
import './css/Trending.css'

import { setActiveFeedIndex, setActiveAlertIndex } from './actions'

export class PostList extends Component {
    render() {
        return (
            <div className={"flex " + this.props.type}>
                <div className="header">{this.props.headerTxt}</div>
                <div className="feed">
                    {this.props.feed.map((post, i) =>
                        <div onClick={() => this.props.onPostClick(i)}
                             key={"post" + i}
                             id={"post" + i}
                        >
                            <Post post={post}
                                  active={i === this.props.activeIndex}
                            />
                        </div>
                    )}

                    {!this.props.feed.length && this.props.hasSearchTerm && 
                        <div className="emptyMessage">No posts found</div>
                    }

                    {!this.props.feed.length && !this.props.hasSearchTerm && 
                        <div className="loader">
                            <div>Loading</div>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    }
                </div>
            </div>
        )
    }

    componentDidUpdate() {
        if(this.props.activeIndex){
            var root = ReactDOM.findDOMNode(this)
            root.querySelector("#post"+this.props.activeIndex).scrollIntoViewIfNeeded();
        }
    }
}

const mapStateToProps = function(state, ownProps){
    return{
        type: ownProps.type,
        headerTxt: ownProps.header,
        feed: ownProps.type === "trending" ? state.filteredFeed : state.filteredAlerts,
        activeIndex: ownProps.type === "trending" ? state.activeFeedIndex : state.activeAlertIndex,
        hasSearchTerm: !!state.searchTerm
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    var setActiveIndex = ownProps.type === "trending" ?
                setActiveFeedIndex : setActiveAlertIndex;

    return {
        onPostClick: (i) => {
            dispatch(setActiveIndex(i))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
