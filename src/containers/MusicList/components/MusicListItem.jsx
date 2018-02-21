import React from 'react';
import PropTypes from 'prop-types';

const MusicListItem = ({
  name,
  url,
}) => (
  <li title={url}>
    {name}<br />
    <audio preload="auto" controls>
      <source src={url} type="audio/mp3" />
      <track kind="captions" />
    </audio>
    <br />
  </li>
);

MusicListItem.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default MusicListItem;
