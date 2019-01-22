import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { GET_ASYNC_DATA,
         GET_ASYNC_DATA_SUCCESS,
         GET_ASYNC_DATA_FAILURE } from '../actions/actionTypes.js';

/******************/
/* GET_ASYNC_DATA */
/******************/
function getAsyncDataPromise() {
    return axios.get('/example/get-async-data.json');
}

function* getAsyncData(action) {
    try {
        const response = yield call(getAsyncDataPromise);
        const message = response.data.message;

        yield put({ type: GET_ASYNC_DATA_SUCCESS, message });
    }
    catch (error) {
        yield put({ type: GET_ASYNC_DATA_FAILURE, error });
    }
}

export function* watchGetAsyncData() {
    yield takeLatest(GET_ASYNC_DATA, getAsyncData);
}
