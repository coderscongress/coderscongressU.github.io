import React from "react";
import PropTypes from "prop-types";
import "../App.css";

const YoutubeEmbed = ({ embedId }) => (
  <div className='flex-container'>
    <iframe
      width="400"
      height="280"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      title="My Video"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

YoutubeEmbed.defaultProps = {
  embedId:"WM543iWuxF8"
};

export default YoutubeEmbed;