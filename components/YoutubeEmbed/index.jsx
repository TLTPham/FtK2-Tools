import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

let containerStyle = {
  overflow: "hidden",
  paddingBottom: "56.25%",
  position: "relative",
  height: "0"
}
let iframeStyle = {
  left: "0",
  top: "0",
  height: "100%",
  width: "100%",
  position: "absolute"
}
const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive" style={containerStyle}>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"

      style={iframeStyle}
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;