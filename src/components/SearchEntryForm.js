import React from 'react';

class SearchEntryForm extends React.Component {
	createSearch(event) {
	    event.preventDefault();
	    const search = { searchInput: this.searchInput.value }
	    console.log(search);
	    this.props.processSearch(search);
	    this.searchForm.reset();
  	}

	render() {
		return (
			<form ref={(input) => this.searchForm = input} className="search-form" onSubmit={(e) => this.createSearch(e)}>
				Search Youtube<br/>
				<input ref={(input) => this.searchInput = input} type="text" placeholder="Example: Cat Videos" className="searchInput"  />
	            <button type="submit">Submit</button>
            </form>
		)
	}
}

SearchEntryForm.propTypes = {
  processSearch: React.PropTypes.func.isRequired
}

export default SearchEntryForm;