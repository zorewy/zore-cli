/** 2018/11/26 15:23
 *作者: Yudong.Chen
 *文件: Common.js
 *功能:
 */
export const GLOBAL_CODEMSG_SHOW = 'GLOBAL_CODEMSG_SHOW'
export const globalCodeMsgShow = (globalCodeMsg, globalCodeType) => {
	return {
		type: GLOBAL_CODEMSG_SHOW,
		globalCodeMsg: globalCodeMsg,
		globalCodeType: globalCodeType
	}
}
export const GLOBAL_CODEMSG_HIDDEN = 'GLOBAL_CODEMSG_HIDDEN'
export const globalCodeMsgHidden = () => {
	return {
		type: GLOBAL_CODEMSG_HIDDEN
	}
}

export const GLOBAL_MODAL_HIDE = 'GLOBAL_MODAL_HIDE'
export const globalModalHide = () => {
  return {
    type: GLOBAL_MODAL_HIDE
  }
}

export const GLOBAL_MODAL_SHOW = 'GLOBAL_MODAL_SHOW'
export const globalModalShow = () => {
  return {
    type: GLOBAL_MODAL_SHOW
  }
}
export const GLOBAL_USER_MODAL_HIDE = 'GLOBAL_USER_MODAL_HIDE'
export const globalUserModalHide = () => {
  return {
    type: GLOBAL_USER_MODAL_HIDE
  }
}

export const GLOBAL_USER_MODAL_SHOW = 'GLOBAL_USER_MODAL_SHOW'
export const globalUserModalShow = () => {
  return {
    type: GLOBAL_USER_MODAL_SHOW
  }
}