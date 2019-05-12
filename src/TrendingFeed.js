import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import { connect } from 'react-redux'
import './css/Trending.css'

import { setActiveIndex } from './actions'

export class TrendingFeed extends Component {
    render() {
        return (
            <div className="trending flex">
                <div className="header">Trending Messages</div>
                <div className="feed">
                    {this.props.feed.map((post, i) =>
                        <div className={"post" + (i === this.props.activeIndex ? " active" : "")}
                            key={"post" + i}
                            id={"post" + i}
                            onClick={() => this.props.onPostClick(i)}
                            >
                            <div className="type semibold left">{post.type}</div>

                            <div className="date right">{post.time.toLocaleTimeString()}</div>
                            <div className="clearfix"></div>

                            <span className="name">{post.name}:</span>
                            <span className="content">{post.content}</span>
                        </div>
                    )}
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

const mapStateToProps = (state) => ({
    feed: state.filteredFeed,
    activeIndex: state.activeIndex
})

const mapDispatchToProps = (dispatch) => {
    return {
        onPostClick: (i) => {
            dispatch(setActiveIndex(i))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrendingFeed)
