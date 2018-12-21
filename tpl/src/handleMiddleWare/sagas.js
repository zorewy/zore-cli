/** 2018/11/26 16:21
 *作者: Yudong.Chen
 *文件: sagas.js
 *功能: 统一导出saga
 */
import {fork} from 'redux-saga/effects'

export default function* root() {
	yield [
		// fork(loginSaga),
	]
}
