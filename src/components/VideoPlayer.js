import React from 'react';

class VideoPlayer extends React.Component {
	render () {
		const details = this.props.currentVideo;
		if(Object.keys(details).length === 0 && details.constructor === Object){
			return(<div></div>)
		} else {
			const title = details.snippet.title;
			return (
				<div>
					<iframe title={title} src={"http://www.youtube.com/embed/" + details.id.videoId} frameBorder="0" allowFullScreen></iframe>
				</div>
			) 
		}
	}
}

export default VideoPlayer; 