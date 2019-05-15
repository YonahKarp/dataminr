import React, { Component } from 'react'
// import ReactDOM from 'react-dom';

import { connect } from 'react-redux'
import './css/Trending.css'

// import { setActiveIndex } from './actions'

export class TrendingFeed extends Component {
    render() {
        return (
            <div className="alerts flex">
                <div className="header">Alerts</div>
                <div className="feed">
                    {this.props.feed.map((post, i) =>
                        <div className="post"
                            key={"post" + i}
                            id={"post" + i}
                            >
                            <div className="type semibold left">{post.type}</div>

                            <div className="date right">{new Date(post.time).toLocaleDateString()}</div>
                            <div className="clearfix"></div>

                            {post.image &&
                                <img alt="news img" className="right" src={post.image}/>
                            }
                            <span className="name">{post.name}:</span> 
                            <span className="content">{post.content}</span>
                        </div>
                    )}

                    {!this.props.feed.length && this.props.hasSearchTerm && 
                        <div className="emptyMessage">No alerts found</div>
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
}

const mapStateToProps = (state) => ({
    feed: state.filteredAlerts,
    activeIndex: state.activeIndex,
    hasSearchTerm: !!state.searchTerm
})

export default connect(mapStateToProps, null)(TrendingFeed)
