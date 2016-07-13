<template>
	<div class="page">
		
		<head-back></head-back>
		
		<div class="content">
			<form action="" id="">
				<div class="list-block list-margin content-martop10 content-boxshow ">
					<ul>
						<li>
							<div class="item-content content-padrights">
								<div class="item-inner border-bottom">
									<div class="item-title label color-333 font-14">账户</div>
									<div class="item-input">
										<input type="text" id="name" placeholder="您的用户名或手机号码是？">
									</div>
								</div>
							</div>
						</li>

						<li>
							<div class="item-content content-padrights" >
								<div class="item-inner ">
									<div class="item-title label color-333 font-14">密码</div>
									<div class="item-input">
										<input type="password" id="password" v-model="password" placeholder="您的密码？">
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div class="padding21">
					<a id="login" class="button button-big button-warning margin20">登录</a>
					<a href="/#/register1" class="button button-big button-light backfff">立即注册</a>
				</div>
			</form>
			<div class="getpwd text-right padding575">
				<a href="getpwd.html" class="color-333 min-font">忘记密码？</a>
			</div>
		</div>
		
	</div>
		
	<panel></panel>
		
</template>

<script>
	import headBack from "../components/headBack.vue"
	import panel from "../components/panel.vue"
	import store from "../vuex/store.js"
	import getters from "../vuex/getters.js"
	import actions from "../vuex/actions.js"
	export default {
		name: "login",
		data(){
			return {
				password: ''
			}
		},
		methods: {
			eBind(){
				var _self = this;
				
				var tel_exp = /^1[3|4|5|7|8]\d{9}$/;
				var name_exp = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/;
				var num_exp = /^\d+$/;
				
				function checkUser(){
					var content = $('#name').val();
					if(tel_exp.test(content)){
						return true;
					}else if(content==''){
						$.toast('请填写用户名');
						return false;
					}else if(!name_exp.test(content)){
						$.toast('用户名由汉字、字母或数字组成');
						return false;
					}else if(num_exp.test(content)){
						$.toast('用户名不能全为数字');
						return false;
					}else{
						return true;
					}
				}
				
				function testPassword() {
					var content = $('#password').val();
					if (content == "") {
						$.toast("请输入密码");
						return false;
					} else if (num_exp.test(content)) {
						$.toast("密码不能全是数字");
						return false;
					} else
						return true;
				}
				
				$('#name').blur(checkUser);
				
				$('#password').blur(testPassword);
				
				$('#login').click(function(){
					if(checkUser()==true && testPassword()==true){
						var name = $('#name').val();
						var password = $('#password').val();
						$.ajax({
							url:'/static/data/tokenState.json',
							data:{"name": name, "password": password},
							dataType:'json',
							async: false,
							success:function(msg){
								if(msg.code==1){
									$.toast('登录成功');
									_self.loginIn();
									location.href = "/#/user";
								}else{
									$.toast(msg.message);
								}
							},
							cache:false
						});
					}
				});
			}
		},
		components: {
			headBack,
			panel
		},
		store: store,
		vuex: {
			getters: {
				isLogin: getters.loginStatus
			},
			actions: {
				loginIn: actions.loginIn,
				tokenState: actions.tokenState
			}
		},
		route: {
			data(){
				this.tokenState()
				if(this.isLogin)location.href = "/#/"
				this.password = ''
			}
		},
		ready(){
			this.eBind() 
			$.init()
		}
	}
</script>