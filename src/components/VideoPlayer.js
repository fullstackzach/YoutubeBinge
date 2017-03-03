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
					<iframe title={title} src={"https://www.youtube.com/embed/" + details.id.videoId} frameBorder="0" allowFullScreen></iframe>
				</div>
			) 
		}
	}
}

VideoPlayer.propTypes = {
  currentVideo: React.PropTypes.object.isRequired
}


export default VideoPlayer; 