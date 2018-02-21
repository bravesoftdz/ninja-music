import { combineReducers } from 'redux';

import { MusicActions } from './MusicListActions';

const initialState = [];

const musicList = (state = initialState, action) => {
  switch (action.type) {
    case MusicActions.GET_MUSICS_SUCCESS:
      return action.musicList;

    default:
      return state;
  }
};

export default combineReducers({
  musicList,
});
