<template>
	<div class="page">
		
		<head-back></head-back>
		
		<div class="content ">
			<div class="backfff paddingbottom20 content-boxshow">
				<div class="imgboxpad">
					<div class="imgbox marginauto">
						<i class="icon-chenggong2 iconfont colorcfb0"></i>
					</div>
				</div>
				<div class="max-font1 text-center ">恭喜您注册成功</div>
				<div class="min-font text-center padding1 ">您已获得<em class="colorffb">15元</em>红包，首次充值再送<em class="colorffb">10元</em>红包</div>
			</div>
			<div class="row padding20">
				<div class="col-50"><a href="recharge.html" class="button button-big bgcolor-ffb button-warning  max-font" external>立即充值</a></div>
				<div class="col-50"><a href="userCenter.html" class="button button-big  button-fill  max-font" external>进入我的账户</a></div>
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
	export default {
		name: "register3",
		data(){
			return {
				prevent: true
			}
		},
		methods: {
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
				if(_self.prevent)location.href = "/#/login";
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
				this.intercept();
			}
		},
		ready(){
			$.init()
		}
	}
</script>