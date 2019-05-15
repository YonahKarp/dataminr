import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Post extends Component {

	render() {
		return (
			<div className={"post" + (this.props.active ? " active" : "")}>
				<div className="type semibold left">{this.props.post.type}</div>

				<div className="date right">{new Date(this.props.post.time).toLocaleTimeString()}</div>
				<div className="clearfix"></div>

				{this.props.post.image &&
					<img alt="news img" className="right" src={this.props.post.image} />
				}

				<span className="name">{this.props.post.name}:</span>
				<span className="content">{this.props.post.content}</span>
				<div class="clearfix"></div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
