import React from 'react';

class SearchResult extends React.Component {
	selectVideo (event) {
		event.preventDefault();
		this.props.watchVideo(this.props.details);
	}

	render () {
		const details = this.props.details;
        const title = details.snippet.title;
        console.log(`+${title}+`);
		return (
			<li className="result">
				<form ref={(input) => this.searchResult = input} className="watch-select-form" onClick={(e) => this.selectVideo(e)}>
	                <span className="title">{title}</span>
	                {/*<span className="author">Author: {author}</span>*/}
	            </form>
			</li>
		)
	}
}

SearchResult.propTypes = {
  watchVideo: React.PropTypes.func.isRequired
}

export default SearchResult;