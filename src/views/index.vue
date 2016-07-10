<template>
	<div class="page">
		
		<head-nav></head-nav>
		
		<div class="content">
			
			<swiper></swiper>
			
			<div class="row no-gutter backfff content-marbottom10 content-boxshow">
				<!--登录以前-->
				<div class="col-25  content-padTwenty" v-if='!isLogin'>
					<a href="/#/login"  >
						<div class="demobox"><i class="iconfont icon-login colorffb"></i></div>
					</a>
					<small class="index-small-style">登录</small>
				</div>
				<div class="col-25  content-padTwenty" v-if='!isLogin'>
					<a href="/#/register1" >
						<div class="demobox"><i class="iconfont icon-reg color-cfd"></i></div>
					</a>
					<small class="index-small-style">注册</small>
				</div>
				<!--登录过后-->
				<div class="col-25  content-padTwenty" v-if="isLogin">
					<a href="javascript:;" >
						<div class="demobox"><i class="iconfont icon-recharge colorffb"></i></div>
					</a>
					<small class="index-small-style">充值</small>
				</div>
				<div class="col-25 content-padTwenty" v-if="isLogin">
					<a href="/#/user" >
						<div class="demobox"><i class="iconfont icon-account colorffc"></i></div>
					</a>
					<small class="index-small-style">账户</small>
				</div>
				<div class="col-25 content-padTwenty">
					<a href="/#/list" >
						<div class="demobox"><i class="iconfont icon-tender color-cfd"></i></div>
					</a>
					<small class="index-small-style">投资</small>
				</div>
				<div class="col-25  content-padTwenty">
					<a href="javascript:;">
						<div class="demobox"><i class="iconfont icon-live colorcfb0"></i></div>
					</a>
					<small class="index-small-style" >监控</small>
				</div>
			</div>
			
			<div class="overflow">
				<div class="list-block media-list list-margin">
					<ul class="projects-bg">
						<li v-for="item in items" class="content-marbottom10 content-boxshow">
							<a v-bind:href="item.url" class="item-link content-padrights overflow">
								<div class="border-bottom item-content">
									<div class="item-inner content-padr5" >
										<div class="item-title-row">
											<div class="item-title min-font color-cfd" v-text="item.way"></div>
											<div class="item-after min-font color-999" v-text="item.time"></div>
										</div>
										<div class="item-subtitle content-pad2 color-666" v-text="item.title"></div>
										<div class="item-text">
											<span class="newBtn bgcolor-ffb border-radius5" v-if="item.freshman">新手专享</span>
											<span class="newBtn backcfb0 border-radius5" v-if="item.investM">手动投标</span>
											<span class="newBtn bgcolor-cfd border-radius5" v-if="!item.investM">自手不限</span>
											<span class="newBtn bgcolor-ffb border-radius5" v-if="item.investAll">包标</span>
										</div>
									</div>
								</div>
								<div class="row no-gutter content-pad10lrights">
									<div class="col-33">
										<span class="min-font display-block text-center content-padtb color-999">借款金额(元)</span>
										<samll class="text-center display-block color-333" v-text="item.borrowNum"></samll>
									</div>
									<div class="col-33">
										<span class="min-font display-block text-center content-padtb color-999">年化利率(%)</span>
										<samll class="text-center display-block color-ffb" v-text="item.profitNum"></samll>
									</div>
									<div class="col-33">
										<span class="min-font display-block text-center content-padtb color-999">借款期限(月)</span>
										<samll class="text-center display-block color-333" v-text="item.borrowTime"></samll>
									</div>
								</div>
								<speed v-bind:pgs="item.progress" v-bind:remain="item.remain"></speed>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="width100 text-center" style="padding-bottom:.5rem;">
				<a href="/#/list" class="min-font color-666" >更多项目></a>
			</div>
			
			<div class="backfff">
				<div class="row no-gutter ">
					<div class="col-50 border-bottom border-right padding5752">
						<a href="introduce.html">
						<div class="row list-margin ">
							<div class="col-60">
								<b class="display-block  color-666 text-left">关于我们</b>
								<p class="display-block  min-font margin10 color-999 text-left">最性感的P2P</p>
							</div>
							<div class="col-40">
								<div class="ibox">
									<img class="aboutus" src="../assets/aboutus.svg" alt=""/>
								</div>
							</div>
						</div>
						</a>
					</div>
					<div class="col-50 border-bottom  padding5752">
					<a href="special.html">
					<div class="row list-margin">
						<div class="col-60">
							<b class="display-block  color-666 text-left">安全保障</b>
							<p class="display-block  min-font margin10 color-999 text-left">100%本息保障</p>
						</div>
						<div class="col-40">
							<div class="ibox">
								<img class="security" src="../assets/security.svg" alt=""/>
							</div>
						</div>
					</div>
					</a>
				</div>
				</div>
				<div class="row no-gutter ">
					<div class="col-50 border-bottom border-right padding5752">
						<a href="articlelist.html">
						<div class="row list-margin">
							<div class="col-60">
								<b class="display-block  color-666 text-left">平台公告</b>
								<p class="display-block  min-font margin10 color-999 text-left">最新平台动态</p>
							</div>
							<div class="col-40">
								<div class="ibox">
									<img  class="notice" src="../assets/notice.svg" alt=""/>
								</div>
							</div>
						</div>
						</a>
					</div>
					<div class="col-50 border-bottom  padding5752">
						<a href="detaillist.html">
						<div class="row list-margin">
							<div class="col-60">
								<b class="display-block  color-666 text-left">发标预告</b>
								<p class="display-block  min-font margin10 color-999 text-left">每日发标预告</p>
							</div>
							<div class="col-40">
								<div class="ibox">
									<img  class="announce" src="../assets/announce.svg" alt=""/>
								</div>
							</div>
						</div>
						</a>
					</div>
				</div>
			</div>
			
		</div>
	
	</div>
	
	<panel></panel>
</template>

<script>
	import headNav from "../components/headNav.vue"
	import panel from "../components/panel.vue"
	import swiper from "../components/swiper.vue"
	import footNav from "../components/footNav.vue"
	import speed from "../components/speed.vue"
	import store from "../vuex/store.js"
	import getters from "../vuex/getters.js"
	import actions from "../vuex/actions.js"
	export default {
		name: "index",
		data(){
			return {
				items: []
			}
		},
		methods: {
			getItems(){
				var _self = this;
				$.get("/static/data/listData.json",{"params":250},function(data){
					if(data.code==1)_self.items = data.projects
				},"json");
			}
		},
		components: {
			headNav,
			panel,
			swiper,
			speed,
			footNav
		},
		store: store,
		vuex: {
			getters: {
				isLogin: getters.loginStatus
			},
			actions: {
				tokenState: actions.tokenState
			}
		},
		route: {
			data(){
				this.tokenState()
				this.getItems()
			}
		},
		ready(){
			$.init()
		}
	}
</script>