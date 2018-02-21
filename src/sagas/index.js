import { all } from 'redux-saga/effects';
import { MusicListSaga } from '../containers/MusicList';

export default function* rootSaga() {
  yield all([
    MusicListSaga(),
  ]);
}

