import { fork } from 'redux-saga/effects';
import * as exampleSagas from './exampleSagas';

export default function* rootSaga() {
  const sagaModules = [exampleSagas];

  for (let sagaModule of sagaModules) {
    const sagas = Object.values(sagaModule);

    for (let saga of sagas) {
      yield fork(saga);
    }
  }
}
