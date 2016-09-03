import Vue from 'vue'
import Vuex from 'vuex'

// ���� vue ��ʹ�á� vuex
Vue.use(Vuex)

// ����һ������������Ӧ������ʱ�ĳ�ʼ״̬
const state = {
	// TODO: ���ó�ʼ״̬
	count: 2016,
	login: false
}

// ����һ������洢һϵ�����ǽ�����Ҫд�� mutation ����
const mutations = {
	// TODO: �������ǵ�״̬�������
	INCREMENT(state, amount){
		state.count = state.count + amount
	},
	LOGINOUT(state){
		state.login = false;
		var ex = new Date();
		ex.setTime(new Date().getTime() + 1.44E7);
		document.cookie = "login=false;expires=" + ex + ";path=/;";
	},
	LOGININ(state){
		state.login = true;
		var ex = new Date();
		ex.setTime(new Date().getTime() + 1.44E7);
		document.cookie = "login=true;expires=" + ex + ";path=/;";
	},
	LOGINCHECK(state){
		var login = false;
		var cookies = document.cookie.split(';');
		for(var i=0; i<cookies.length; i++){
			if(cookies[i].split('=')[0].replace(/\s/g,'')=='login')break;
		}
		if(i < cookies.length)login = cookies[i].split('=')[1]=="true" ? true : false;
		state.login = login;
	},
	TOKEN(state){
		var ajaxReturn = false;
		var cookies = document.cookie.split(';');
		var token = '';
		for(var i=0; i<cookies.length; i++){
			if(cookies[i].split('=')[0]=='token')break;
		}
		if(i < cookies.length)token = cookies[i].split('=')[1];
		$.ajax({
			url: "/static/data/tokenState.json",
			data: {"token": token},
			dataType: "json",
			success: function(res){
				if(res.code==1){
					state.login ? ajaxReturn = res.valid : ajaxReturn = res.unvalid;
					document.cookie = "token=" + res.content + ";expires=Session;path=/;";
				}
			},
			async: false
		});
		state.login = ajaxReturn;
	}
}

// ���ϳ�ʼ״̬�ͱ�����������Ǿ͵õ������������ store
// ���ˣ���� store �Ϳ������ӵ����ǵ�Ӧ����
export default new Vuex.Store({
	state,
	mutations
})