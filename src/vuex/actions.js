// action ���յ� store ��Ϊ���ĵ�һ������
// ��Ȼ����ֻ���¼��ķַ���dispatch ���󣩸���Ȥ����state Ҳ������Ϊ��ѡ����룩
// ���ǿ������� ES6 �Ľ⹹��destructuring���������򻯶Բ����ĵ���
const incrementCounter = function ({ dispatch, state }) {
  dispatch('INCREMENT', 1)
}

const loginOut = function({ dispatch, state }){
	dispatch('LOGINOUT')
}

const loginIn = function({ dispatch, state }){
	dispatch('LOGININ')
}

const loginCheck = function({ dispatch, state }){
	dispatch('LOGINCHECK')
}

const tokenState = function({ dispatch, state }){
	dispatch('TOKEN')
}

export default {incrementCounter, loginOut, loginIn, loginCheck, tokenState}