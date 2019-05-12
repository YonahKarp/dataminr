import React, { Component } from 'react'
import { connect } from 'react-redux'
import './css/Trending.css'

export class TrendingFeed extends Component {
  render() {
      console.log(this.props)
    return (
        <div className="trending">
            <div className="header">Trending Messages</div>
            <div className="feed">
                {this.props.feed.map((post, i) =>
                    <div className="post" key={"post" + i}>
                        <div className="date right">{post.time.toLocaleTimeString()}</div>

                        <span className="name">{post.name}</span>
                        <div className="content">{post.content}</div>
                    </div>
                )}
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
    feed: state.filteredFeed
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(TrendingFeed)
