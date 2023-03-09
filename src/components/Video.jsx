import React from 'react'

const Video = ({ videoSrc }) => {
    return (
      <div style={{ borderRadius: '10px' }}>
        <video
          style={{ borderRadius: '10px' }}
          src={videoSrc}
          controls
          width="1000"
          height="615"
          loop
        />
      </div>
    );
  };

export default Video