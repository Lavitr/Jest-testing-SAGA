import { put, takeLatest, all } from 'redux-saga/effects';

export function* fetchNews() {
  const API_URL = 'https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc'
  try {
    const response = yield fetch(API_URL).then(response => response.json());
    
    yield put({ type: "NEWS_RECEIVED", json: response.articles });
  }
  catch (e) {
   console.log("ERROR", e);
  }
}

export function* actionWatcher() {
  yield takeLatest('GET_NEWS', fetchNews)
}

export default function* rootSaga() {
  yield all([
    actionWatcher()
  ]);
}
