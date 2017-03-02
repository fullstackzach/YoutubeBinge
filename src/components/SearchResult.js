import React from 'react';

class SearchResult extends React.Component {
	selectVideo (event) {
		this.props.watchVideo(this.props.details);
	}

	render () {
		return (
			<li className="result" onClick={(e) => this.selectVideo(e)}>
				<form ref={(input) => this.searchResult = input} className="watch-select-form">
	                <span className="title">{this.props.details.snippet.title}</span>
	            </form>
			</li>
		)
	}
}

SearchResult.propTypes = {
  watchVideo: React.PropTypes.func.isRequired,
  details: React.PropTypes.object.isRequired
}

export default SearchResult;