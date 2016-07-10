import Vue from 'vue'
import Vuex from 'vuex'

// 告诉 vue “使用” vuex
Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
const state = {
	// TODO: 放置初始状态
	count: 2016,
	login: false
}

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
	// TODO: 放置我们的状态变更函数
	INCREMENT(state, amount){
		state.count = state.count + amount
	},
	LOGINOUT(state){
		state.login = false
	},
	LOGININ(state){
		state.login = true
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
					ajaxReturn = res.valid;
					document.cookie = "token=" + res.content + ";expires=Session;path=/;";
				}
			},
			async: false
		});
		state.login = ajaxReturn;
	}
}

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
	state,
	mutations
})