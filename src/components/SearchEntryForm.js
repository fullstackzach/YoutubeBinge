import React from 'react';

class SearchEntryForm extends React.Component {
	constructor() {
		super();
		this.timer = null;  /* used to delay search between keystrokes */ 
	}


	/* processes changes on the searchForm, creates the search object and sets an appropriate timeout */
	createSearch(event) {
	    event.preventDefault();
	    /* build search parameter object */
	    const search = { 
	    	searchInput: this.searchInput.value.trim(), 
	    	searchOrder: this.searchOrder.value
	    }

	    clearTimeout(this.timer);
	    /* only search if there's something in the search field */
	    if (search.searchInput !== ""){
	    	/* if searchInput is changed, wait 1 sec before firing off search */
		    if (event.target.className === "searchInput"){  
			    this.timer = setTimeout(() => {
			    	this.props.processSearch(search);
			    },1000);	    
		    } else { /* Else, if the video sort is changed, fire request immediately */
		    	this.props.processSearch(search);
		    }
		}
  	}

	render() {
		return (
			<form ref={(input) => this.searchForm = input} className="search-form" onChange={(e) => this.createSearch(e)} onSubmit={(e) => e.preventDefault()}>
				Search Youtube<br/>
				<input ref={(input) => this.searchInput = input} type="text" placeholder="Example: Cat Videos" className="searchInput" onSubmit=""/>
				<span>By:</span>
				<select ref={(input) => this.searchOrder = input} type="text" className="searchOrder" onChange={(e) => this.createSearch(e)}>
					<option value="date">Date</option>
					<option value="rating">Rating</option>
					<option value="relevance">Relevance</option>
					<option value="title">Title</option>
					<option value="viewCount">View Count</option>
				</select>
            </form>
		)
	}
}

SearchEntryForm.propTypes = {
  processSearch: React.PropTypes.func.isRequired
}

export default SearchEntryForm;