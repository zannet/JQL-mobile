<template>
	<div class="page">
		
		<head-back></head-back>
		
		<div class="content contentf">
			<div class="backfff content-boxshow content-marbottom10 content-martop10">
				<div class="list-block media-list list-margin ">
					<ul>
						<li>
							<div class="item-content">

								<div class="item-inners content-padr5 content-padlefts bgcolorcfd" >
									<div class="item-title-row">
										<div class="item-title min-font colorfff" v-if="detail.borrowType">先息期本</div>
										<div class="item-after min-font colorfff content-padbots" v-text="detail.time"></div>
									</div>
									<div class="item-subtitle content-pad2 colorfff max-font" v-text="detail.title"></div>
									<div class="item-text">
										<span class="newBtn border-radius border" v-if="detail.fresh">新手专享</span>
										<span class="newBtn border-radius border" v-if="detail.mt">手动投标</span>
										<span class="newBtn border-radius border" v-if="detail.takeAll">包</span>
									</div>
									<span class="min-font pull-right colorfff content-padbots" v-text="detail.company"></span>
								</div>

							</div>
							<div class="row no-gutter content-pad10l">
								<div class="col-33">
									<span class="min-font display-block text-center content-padtb color-999">借款金额(元)</span>
									<samll class="text-center display-block color-333" v-text="detail.money"></samll>
								</div>
								<div class="col-33">
									<span class="min-font display-block text-center content-padtb color-999">年化利率(%)</span>
									<samll class="text-center display-block color-ffb" v-text="detail.profit"></samll>
								</div>
								<div class="col-33">
									<span class="min-font display-block text-center content-padtb color-999">借款期限(月)</span>
									<samll class="text-center display-block color-333" v-text="detail.month"></samll>
								</div>
							</div>
							<div class="content-pad10about overflow" >
								<div class="speed">
									<div class="timer" style="width:{{detail.progress}};"></div>
								</div>
								<span class=" pull-left min-font content-pad5 color-bf">已投<em class="color-ffb">{{detail.invested}}</em>元</span>
								<span class="pull-right min-font content-pad5 color-bf" v-text="detail.progress"></span>
							</div>
						</li>
					</ul>
				</div>
			</div>

			<!--about-->
			<div class="list-block content-boxshow list-margin">
				<ul>
					<li class="item-content content-padrights">
						<div class="item-inner  border-bottom" >
							<div class="item-title color-333 font-14">保障方式</div>
							<div class="item-after font-14" v-text="detail.protect"></div>
						</div>
					</li>
					<li class="item-content content-padrights">
						<div class="item-inner ">
							<div class="item-title color-333 font-14">可投金额</div>
							<div class="item-after font-14" v-text="detail.remain"></div>
						</div>
					</li>
					<!--<li class="item-content content-padrights">-->
						<!--<div class="item-inner  ">-->
							<!--<div class="item-title color-333 font-14">剩余时间</div>-->
							<!--<div class="item-after font-14">24:48:12</div>-->
						<!--</div>-->
					<!--</li>-->
				</ul>
			</div>
			<!--end-->
			<!--tab-->
			<div class="buttons-tab content-martop10">
				<a href="#tab1" class="tab-link active button">借款详情</a>
				<a href="#tab2" class="tab-link button">投标记录</a>
				<a href="#tab3" class="tab-link button">还款记录</a>
			</div>
			<div class="content-boxshow">
				<div class="tabs content-marbottom10">
					<div id="tab1" class="tab active">
						<div class="backfff content-padcens" v-html="detail.words">
						
						</div>
						<!--slider-->
						<div class="list-block content-martop10 list-margin content-martop10">
							<ul id="photosBox">
								<li class="item-content item-link content-padrights pb-popup">
									<div class="item-inner border-bottom">
										<div class="item-title color-333 font-14">质押物材料</div>
									</div>
								</li>
								<li class="item-content item-link content-padrights pb-popup">
									<div class="item-inner border-bottom">
										<div class="item-title color-333 font-14">授证信息</div>
									</div>
								</li>
								<li class="item-content item-link content-padrights pb-popup">
									<div class="item-inner border-bottom">
										<div class="item-title color-333 font-14">借款合同</div>
									</div>
								</li>
								<li class="item-content item-link content-padrights pb-popup">
									<div class="item-inner ">
										<div class="item-title color-333 font-14">打款凭证</div>
									</div>
								</li>
							</ul>
						</div>
						<!--end-->
					</div>
					<div id="tab2" class="tab backfff">

						<div class="list-block media-list list-margin content-padrights">
							<ul>
								<li v-for="investor in detail.investors">
									<div class="item-content">
										<div class="item-inner border-bottom ">
											<div class="item-title-row">
												<div class="item-title color-333 font-14" v-text="investor.name"></div>
												<div class="pull-right color-333 min-font" v-text="investor.num"></div>
											</div>
											<div class="item-subtitle color-999 min-font">
												{{investor.moment}}
												<div class="pull-right" v-if="investor.usebag">
													<span class="newBtn bgcolorff7 border-radius5">红包{{investor.redbag}}</span>
												</div>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>

					</div>
					<div id="tab3" class="tab backfff">
						<div class="list-block media-list list-margin content-padrights">
							<ul>
								<li v-for="repay in detail.repays">
									<div class="item-content">
										<div class="item-inner border-bottom">
											<div class="item-title-row">
												<div class="color-333 font-14">应还本金：{{repay.account}}</div>
												<div class="pull-right color-999 font-14" v-text="repay.current"></div>
											</div>
											<div class="item-subtitle color-333 font-14">应还利息：{{repay.interest}}
												<div class="pull-right color-999 min-font" v-text="repay.returnTime"></div>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<!--end-->
		</div>
		<footer class="bar bar-tab ">
			<div class="padding575 backfff">
				<a v-if="!isLogin" href="/#/login" class="button button-big button-warning top0">请先登录</a>
				<a v-if="isLogin" href="javascript:;" class="button button-big button-warning top0 ">立即投标</a>
			</div>
		</footer>
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
		name: "list",
		data(){
			return {
				detail: {}
			}
		},
		methods: {
			getInfo(){
				var _self = this;
				var id = this.$route.params.id;
				$.ajax({
					url: "/static/data/borrow.json",
					data: {"id": id},
					dataType: "json",
					success: function(res){
						if(res.code==1)_self.detail = res.detail;
					},
					async: false
				});
			},
			getPhotos(){
				var _self = this;
				$("#photosBox li.pb-popup").each(function(i){
					$(this).click(function(){
						var photoPopup = $.photoBrowser(_self.detail.list[i]);
						photoPopup.open();
					});
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
				tokenState: actions.tokenState
			}
		},
		route: {
			data(){
				this.tokenState()
				this.getInfo()
			}
		},
		ready(){
			this.getPhotos();
			$.init();
		}
	}
</script>