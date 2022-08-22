import { errorMonitor } from "events";
import { call, put, all, takeLatest } from "redux-saga/effects";
import { User, UserActionTypes, UserPayload } from "../../types/user";
import { addUseerError, addUseerSuccess } from "../action-creators/user";

const addLoginUser = (params: UserPayload) => {
  const userData: User = {
    name: "Only",
    email: "steve.jobs@example.com",
    id: 3,
  };
  const dataReq = {
    email: "steve.jobs@example.com",
    password: "password",
  };
  debugger;
  if (params.email === dataReq.email) {
    if (params.password === dataReq.password) {
      return { userData };
    }
  } else {
    throw new Error(`Пользователя ${params.email} не существует`);
  }

  // return $host.post<any>("api/user/login", params);
};

function* addLoginUsereWorker(action: any) {
  debugger;
  try {
    const { userData } = yield call(addLoginUser, action.payload);

    yield put(addUseerSuccess(userData));
  } catch (e) {
    console.log(e);
    yield put(addUseerError((e as Error).message));
    console.log((e as Error).message);
  }
}
function* logOutnUsereWorker() {
  try {
    yield put(addUseerSuccess(null));
  } catch (e) {
    console.log(e);
    yield put(addUseerError("Произошла ошибка при загрузке типов"));
  }
}
export function* addUserfWatcher() {
  yield all([
    takeLatest(UserActionTypes.FETCH_USER, addLoginUsereWorker),
    takeLatest(UserActionTypes.LOG_OUT_USER, logOutnUsereWorker),
  ]);
}
