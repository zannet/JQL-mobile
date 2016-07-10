<template>
	<div class="page">
		
		<head-back></head-back>
		
		<div class="content infinite-scroll infinite-scroll-bottom" data-distance="50">
			
			<div class="buttons-tab content-boxshow content-marbottom10">
                <a get-type="0" class="tab-link button" v-bind:class="{'active':urlIndex==0}">全部</a>
                <a get-type="1" class="tab-link button" v-bind:class="{'active':urlIndex==1}">金车贷</a>
                <a get-type="2" class="tab-link button" v-bind:class="{'active':urlIndex==2}">金房贷</a>
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
								<div class="paddAbout">
									<a v-if="item.status=='0'" class="button button-big color3f bgcolor-cfd">开标时间：{{item.time}}</a>
									<a v-if="item.status=='1'" class="button button-big button-warning">立即投标</a>
									<a v-if="item.status=='2'" class="button button-big button-light bgcolorf3">满标审核中</a>
									<a v-if="item.status=='3'" class="button button-big button-light bgcolorf3">还款中</a>
								</div>
							</a>
						</li>
					</ul>
				</div>
				<div class="infinite-scroll-preloader" v-bind:class="{'hide':!loading}">
					<div class="preloader"></div>
				</div>
			</div>
			
		</div>
	
	</div>
	
	<panel></panel>
	
</template>

<script>
	import headBack from "../components/headBack.vue"
	import panel from "../components/panel.vue"
	import speed from "../components/speed.vue"
	import store from "../vuex/store.js"
	import getters from "../vuex/getters.js"
	export default {
		name: "list",
		data(){
			return {
				items: [],
				requestUrl: [
					"/static/data/listData.json",
					"/static/data/listData.json",
					"/static/data/listData.json"
				],
				urlIndex: 0,
				loading: false
			}
		},
		methods: {
			getItems(type,page){
				var _self = this;
				_self.loading = true;
				$.get(type,{"page":page},function(data){
					if(data.code==1)
						_self.items = _self.items.concat(data.projects);
						_self.loading = false;
				},"json");
			},
			eBind(){
				var _self = this;
				
				$(document).on('infinite','.infinite-scroll-bottom',function(){
					if(_self.loading){
						return;
					}
					_self.getItems(_self.requestUrl[_self.urlIndex],_self.items.length/3);
				});
				
				$('.buttons-tab a').click(function(){
					_self.urlIndex = $(this).index();
					_self.items = [];
					_self.getItems(_self.requestUrl[_self.urlIndex],_self.items.length/3);
				});
			}
		},
		route: {
			data(){
				this.items = [];
				this.urlIndex = 0;
				this.getItems(this.requestUrl[this.urlIndex],this.items.length/3);
			}
		},
		components: {
			headBack,
			panel,
			speed
		},
		store: store,
		vuex: {
			getters: {
				isLogin: getters.loginStatus
			}
		},
		ready(){
			this.eBind()
			$.init()
		}
	}
</script>