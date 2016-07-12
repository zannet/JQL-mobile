<template>
	<div class="panel-overlay"></div>
	<div class="panel panel-right panel-reveal theme-dark list-margin" id="panel-right">
		<div class="list-margin">
			<div class="right-log">金桥梁</div>
		</div>
		<div class="list-block list-margin">
			<ul class="rightmenu" >
				<li><a v-on:click.prevent href="/#/">首页</a></li>
				<li><a v-on:click.prevent href="/#/list">我要投资</a></li>
				<li><a v-on:click.prevent href="/#/user" v-on:click="increment">账户中心</a></li>
				<li><a v-on:click.prevent href="javascript:;">视频监控</a></li>
				<li><div class="border-bottom"></div></li>
				<li v-show="!isLogin"><a v-on:click.prevent href="/#/register1">注册</a></li>
				<li v-show="!isLogin"><a v-on:click.prevent href="/#/login">登录</a></li>
				<li v-show="isLogin"><a v-on:click.prevent href="/#/user">用户名</a></li>
				<li v-show="isLogin"><a v-on:click.prevent class="out" href="/#/login">退出</a></li>
			</ul>
		</div>
	</div>
</template>

<script>
	import getters from "../vuex/getters.js"
	import actions from "../vuex/actions.js"
	export default {
		name: "panel",
		el: "panel",
		data(){
			return {
			
			}
		},
		methods: {
			eBind(){
				var _self = this;
				$('#panel-right').on('opened',function(){
					$(this).off('closed');
				});
				$('.rightmenu a').click(function(){
					if(!$(this).is('.out')){
						var url = $(this).prop('href');
						$('#panel-right').on('closed',function(){
							location.href = url;
						});
						$.closePanel();
					}else{
						var cookies = document.cookie.split(';');
						var token = '';
						for(var i=0; i<cookies.length; i++){
							if(cookies[i].split('=')[0]=='token')break;
						}
						if(i < cookies.length)token = cookies[i].split('=')[1];
						$.ajax({
							url: '/static/data/tokenState.json',
							data: {"token": token},
							dataType: 'json',
							async: false,
							success: function(msg){
								if(msg.code==1){
									$.toast('已退出登录');
									_self.loginOut();
									$('#panel-right').on('closed',function(){
										location.href = "/#/login";
									});
									$.closePanel();
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
		
		},
		vuex: {
			getters: {
				isLogin: getters.loginStatus
			},
			actions: {
				loginOut: actions.loginOut
			}
		},
		ready(){
			this.eBind()
		}
	}
</script>