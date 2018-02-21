import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MusicListItem from './components/MusicListItem';

import { getMusics } from './MusicListActions';

const propTypes = {
  Music: PropTypes.any.isRequired,
  getMusics: PropTypes.func.isRequired,
};

class MusicListContainer extends React.Component {
  componentDidMount() {
    this.props.getMusics();
  }
  render() {
    const { musicList } = this.props.Music;
    return (
      <ul>
        {musicList.map(item => (
          <MusicListItem
            url={item.url}
            name={item.name}
            key={item.id}
          />
        ))}
      </ul>
    );
  }
}

MusicListContainer.propTypes = propTypes;

const mapStateToProps = reducers => ({
  Music: reducers.MusicListReducer,
});

export default connect(
  mapStateToProps,
  {
    getMusics,
  },
)(MusicListContainer);
