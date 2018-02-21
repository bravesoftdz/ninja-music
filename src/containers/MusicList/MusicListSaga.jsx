import { takeLatest, put } from 'redux-saga/effects';
import { MusicActions } from './MusicListActions';

function* getMusics() {
  try {
    const musicList = [
      {
        id: 1,
        name: 'crowd-cheering.mp',
        url: 'http://www.sample-videos.com/audio/mp3/crowd-cheering.mp3',
      },
      {
        id: 2,
        name: 'wave.mp3',
        url: 'http://www.sample-videos.com/audio/mp3/wave.mp3',
      },
    ];
    yield put({ type: MusicActions.GET_MUSICS_SUCCESS, musicList });
  } catch (error) {
    yield put({ type: MusicActions.GET_MUSICS_FAIL, error });
  }
}

export default function* MusicListSaga() {
  yield takeLatest(MusicActions.GET_MUSICS, getMusics);
}
