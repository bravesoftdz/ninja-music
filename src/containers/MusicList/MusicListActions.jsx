const MusicActions = {
  GET_MUSICS: 'GET_MUSICS',
  GET_MUSICS_SUCCESS: 'GET_MUSICS_SUCCESS',
  GET_MUSICS_FAIL: 'GET_MUSICS_FAIL',
  PLAY_MUSIC: 'PLAY_MUSIC',
  PAUSE_MUSIC: 'PAUSE_MUSIC',
  STOP_MUSIC: 'STOP_MUSIC',
};

const getMusics = () => ({
  type: MusicActions.GET_MUSICS,
});

const playMusic = id => ({
  type: MusicActions.GET_MUSICS,
  id,
});

const pauseMusic = id => ({
  type: MusicActions.GET_MUSICS,
  id,
});

const stopMusic = id => ({
  type: MusicActions.GET_MUSICS,
  id,
});

export {
  MusicActions,
  getMusics,
  playMusic,
  pauseMusic,
  stopMusic,
};
