/** 2018/11/26 15:43
 *作者: Yudong.Chen
 *文件: index.js
 *功能:
 */
const CommonReducer = (state = {
	globalCodeMsg: null,
	globalCodeType: 'success',
  globalModalVisible: false,
  globalUserModalVisible: false,
}, action) => {
	switch (action.type) {
		case 'GLOBAL_CODEMSG_SHOW':
			return Object.assign({}, state, {
				globalCodeMsg: action.globalCodeMsg,
				globalCodeType: action.globalCodeType,
				globalStoreInfo: state.globalStoreInfo
			});
		case 'GLOBAL_CODEMSG_HIDDEN':
			return Object.assign({}, state, {
				globalCodeMsg: null,
				globalCodeType: 'success',
				globalStoreInfo: state.globalStoreInfo
			});
    case 'GLOBAL_MODAL_HIDE':
      return Object.assign({}, state, {
        globalModalVisible: false
      });
    case 'GLOBAL_MODAL_SHOW':
      return Object.assign({}, state, {
        globalModalVisible: true
      });
    case 'GLOBAL_USER_MODAL_HIDE':
      return Object.assign({}, state, {
        globalUserModalVisible: false
      });
    case 'GLOBAL_USER_MODAL_SHOW':
      return Object.assign({}, state, {
        globalUserModalVisible: true
      });
		default:
			return state
	}
};
export default CommonReducer;