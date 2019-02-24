import { call, put, takeEvery } from 'redux-saga/effects';
import { ArticlesAction } from '../actions';
import { RECEIVE_ARTICLES, REQUEST_ARTICLES } from '../constants';
import { fetchArticles } from '../services';

function* yieldArticles(action: ArticlesAction) {
    const { payload } = action;
    const result = yield call(fetchArticles, payload);
    const { articles, total } = result;
    yield put({ type: RECEIVE_ARTICLES, articles, total });
};

export function* watchYieldArticles() {
    yield takeEvery(REQUEST_ARTICLES, yieldArticles);
};