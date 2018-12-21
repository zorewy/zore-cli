/** 2018/11/26 15:31
 *作者: Yudong.Chen
 *文件: reducers.js
 *功能: 统一导出reducers
 */
import CommonReducer from './Common/reducer';
import ExampleReducer from './Example/reducer';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  ExampleReducer,
  CommonReducer,
});
export default rootReducer;
