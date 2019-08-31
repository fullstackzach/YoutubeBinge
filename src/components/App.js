import React from 'react';
import SearchEntryForm from './SearchEntryForm';
import SearchResult from './SearchResult';
import VideoPlayer from './VideoPlayer';
import youtubeKey from '../apikeys';

class App extends React.Component {
	constructor(){
		super();
		this.handleServerResponse = this.handleServerResponse.bind(this);
		this.processSearch = this.processSearch.bind(this);
        this.watchVideo = this.watchVideo.bind(this);
        this.displaySortOrder = this.displaySortOrder.bind(this);

		this.state = {
      		videoResultSet: [],
            selectedVideo: {}
    	};
	}

    componentDidMount(){
        let videoResultSet = [];
        this.setState({ videoResultSet });  
    }

    /* Parse the response from a JSON into an object, and store it in state */
    handleServerResponse(){
        if(this.xmlHttp.readyState===4 && this.xmlHttp.status===200){
            let videoResultSet = JSON.parse(this.xmlHttp.responseText).items;    
            this.setState({ videoResultSet });
        }
    }

    /* Make the AJAX call and handle the response */
    processSearch(search) {
    	this.xmlHttp = new XMLHttpRequest();
        
        if(this.xmlHttp.readyState===0 || this.xmlHttp.readyState===4){
            this.xmlHttp.open("GET", `https://www.googleapis.com/youtube/v3/search?key=${youtubeKey}&part=snippet&order=${search.searchOrder}&type=video&q=${search.searchInput}`, true);
            this.xmlHttp.onreadystatechange = this.handleServerResponse;
            this.xmlHttp.send(null);
        } else {
            setTimeout(process(), 1000);
        }
    }

    /* A function to sort search result elements by title, alpabetically */
    displaySortOrder (a, b) {
        const titleA = a.props.details.snippet.title.toLowerCase()
        const titleB = b.props.details.snippet.title.toLowerCase();
        if (titleA < titleB)
            return -1;
        if (titleA > titleB)
            return 1;
        return 0;
    }

    /* Called from SearchResult component, sets the state to the chosen video */
    watchVideo (selectedVideoFromResult) {   
        let selectedVideo = selectedVideoFromResult;
        this.setState({ selectedVideo });
    }

	render () {
		return(
			<div className="youtube-searcher-app">
				<header>Youtube binge!</header>
				<SearchEntryForm processSearch={this.processSearch} videoResultSet={this.state.videoResultSet}/>
                <div className="content-area">
    			    <ul className="list-of-results">
    			        {              
    			           	Object
                   				.keys(this.state.videoResultSet)
                                .map(key => <SearchResult 
                                                key={key} 
                                                details={this.state.videoResultSet[key]} 
                                                watchVideo={this.watchVideo}
                                            />
                                    ).sort((a, b) => this.displaySortOrder(a, b))  /* sort the elements alphabetically */
    			        }
    			    </ul>
                    <div className="video-player">
                        <VideoPlayer currentVideo={this.state.selectedVideo}/>
                    </div>
            	</div>
                <footer>Created by Zach Willard</footer>
			</div>
		);
	}
}

export default App;