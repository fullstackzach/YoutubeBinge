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

		this.state = {
      		videoResultSet: {},
            selectedVideo: {}
    	};
	}

    handleServerResponse(){
    	console.log(`got here: ${this.xmlHttp.readyState} and ${this.xmlHttp.status}`);

        if(this.xmlHttp.readyState===4 && this.xmlHttp.status===200){
            var videoResultSet = [];
            videoResultSet = JSON.parse(this.xmlHttp.responseText).items;
            this.setState({ videoResultSet });
        }
    }

    processSearch(search) {
    	
    	this.xmlHttp = new XMLHttpRequest();
        
        if(this.xmlHttp.readyState===0 || this.xmlHttp.readyState===4){
        	console.log(search.searchInput);
        	const searchTerm = search.searchInput;
            this.xmlHttp.open("GET", `https://www.googleapis.com/youtube/v3/search?key=${youtubeKey}&part=snippet&type=video&q=${searchTerm}`, true);
            this.xmlHttp.onreadystatechange = this.handleServerResponse;
            this.xmlHttp.send(null);
        } else {
            setTimeout(process(), 1000);
        }
    }

    watchVideo (selectedVideoFromResult) {
        var selectedVideo = [];
        selectedVideo = selectedVideoFromResult;
        this.setState({ selectedVideo });
    }

	render () {
		return(
			<div className="youtube-searcher-app">
				<header>Youtube binge!</header>
				<SearchEntryForm processSearch={this.processSearch}/>
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
                                    )
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