<template>
	<div class="page">
		
		<head-back></head-back>
		
		 <div class="content">
			<form action="" method="" id="" autocomplete="off">
				<div class="list-block content-martop10 content-marbottom10 content-boxshow">
					<ul>
						<li>
							<div class="item-content  border-bottom content-padrights" >
								<div class="marginauto color-333">
									<em class="colorffb">验证手机号</em> &gt; <em class="colorffb">设置账户信息</em>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div class="list-block list-margin content-marbottom10 content-martop10 content-boxshow">
					<ul>
						<li>
							<div class="item-content   content-padrights" >
								<div class="item-inner border-bottom">
									<div class="item-title label color-333">用户名</div>
									<div class="item-input">
										<input type="text" id="username" v-model="username" placeholder="填写用户名">
									</div>
								</div>
							</div>
						</li>
						<li>
							<div class="item-content   content-padrights" >
								<div class="item-inner border-bottom">
									<div class="item-title label color-333">密码</div>
									<div class="item-input" >
										<input type="password" id="regPassword" v-model="regPassword" placeholder="填写密码">
									</div>
								</div>
							</div>
						</li>
						<li>
							<a  class="item-link  display-block width100"  >
							<div class="item-content  content-padrights" >
								<div class="item-inner border-bottom" >
									<div class="item-title label color-333">获知渠道</div>
									<select id="obtain" v-model="obtain">
										<option value="0">选择送5元红包(选填)</option>
										<option value="1">新闻报道</option>
										<option value="2">行业网站</option>
										<option value="3">搜索引擎</option>
										<option value="4">朋友介绍</option>
										<option value="5">其他途径</option>
									</select>
								</div>
							</div>
							</a>
						</li>
						<li>
							<div class="item-content   content-padrights" >
								<div class="item-inner ">
									<div class="item-title label color-333">推荐人</div>
									<div class="item-input" >
										<input type="text" id="recommend" v-model="recommend" placeholder="填写可额外获得40元红包(选填)">
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div class="padding575">
					<a id="register_ii" class="button button-big button-light bgcolor-cfd colorfff">完成注册</a>
				</div>
			</form>
		</div>
	</div>
		
	<panel></panel>
		
</template>

<script>
	import headBack from "../components/headBack.vue"
	import panel from "../components/panel.vue"
	import store from "../vuex/store.js"
	import getters from "../vuex/getters.js"
	export default {
		name: "register2",
		data(){
			return {
				prevent: true,
				username: '',
				regPassword: '',
				obtain: '0',
				recommend: ''
			}
		},
		methods: {
			eventBind(){
				var _csrf = $('meta[name="csrf-token"]').attr("content");
				
				var name_exp = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/;
				var num_exp = /^[0-9]+$/;
				
				function checkName(){
					var content = $('#username').val();
					if(content.length>15 || content.length<5){
						$.toast('请填写用户名，长度5-15位');
						return false;
					}else if(!name_exp.test(content)){
						$.toast('用户名由汉字、字母或数字组成');
						return false;
					}else if(num_exp.test(content)){
						$.toast('用户名不能全为数字');
						return false;
					}else{
						//用户名后台查重
						var ajaxReturn = true;
						/*$.ajax({
							url:'/verify/checkusername',
							type:'post',
							data:{"_csrf":_csrf,"username":content},
							async:false,
							dataType:'json',
							success:function(msg){
								if(msg.code==1){
									ajaxReturn = true;
								}else{
									$.toast('该用户名已存在');
								}
							},
							cache:false
						});*/
						return ajaxReturn;
					}
				}
				
				function checkPassword(){
					var content = $('#regPassword').val();
					if(content.length>16||content.length<6){
						$.toast('请填写密码，长度6-16位');
						return false;
					}else if(/\s/g.test(content)){
						$.toast('密码不能含空格');
						return false;
					}else if(num_exp.test(content)){
						$.toast('密码不能全为数字');
						return false;
					}else{
						return true;
					}
				}
				
				function checkInviter(){
					var content = $('#recommend').val();
					if(content.length==0){
						return true;
					}else if(!name_exp.test(content)){
						$.toast('推荐人由汉字、字母或数字组成');
						return false;
					}else{
						//推荐人后台查询
						var ajaxReturn = true;
						/*$.ajax({
							url:'/verify/checkinviter',
							type:'post',
							data:{"_csrf":_csrf,"username":content},
							async:false,
							dataType:'json',
							success:function(msg){
								if(msg.code==1){
									ajaxReturn = true;
								}else{
									$.toast('该推荐人不存在');
								}
							},
							cache:false
						});*/
						return ajaxReturn;
					}
				}
				
				$('#username').blur(checkName);
				
				$('#regPassword').blur(checkPassword);
				
				$('#recommend').blur(checkInviter);
				
				$('#register_ii').click(function(){
					if(checkName()==true && checkPassword()==true && checkInviter()==true){
						/*$.ajax({
							url:'',
							type:'post',
							data:{"_csrf":_csrf,"username":username,"password":password,"obtain":obtain,"recommend":recommend},
							async:false,
							dataType:'json',
							success:function(msg){
								if(msg.code==1){
									location.href = "/#/register3";
								}else{
									$.toast(msg.message);
								}
							},
							cache:false
						});*/
						location.href = "/#/register3";
					}
				});
			},
			intercept(){
				var _self = this;
				$.ajax({
					url: "/static/data/preventUrl.json",
					dataType: "json",
					success: function(res){
						if(res.code==1)_self.prevent = res.prevent;
					},
					async: false
				});
				console.log(this.$route.path + " step now");
				if(_self.prevent)location.href = "/#/";
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
			}
		},
		route: {
			data(){
				console.log(this.$route.path + ' step now');
				this.intercept();
				this.username = '';
				this.regPassword = '';
				this.obtain = '0';
				this.recommend = '';
			}
		},
		ready(){
			this.eventBind()
			$.init()
		}
	}
</script>
