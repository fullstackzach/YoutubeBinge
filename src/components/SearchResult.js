import React from 'react';
import PropTypes from 'prop-types';

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
  watchVideo: PropTypes.func.isRequired,
  details: PropTypes.object.isRequired
}

export default SearchResult;