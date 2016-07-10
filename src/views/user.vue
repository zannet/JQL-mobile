<template>
	<div class="page">
		
		<head-back></head-back>
		
		<div class="content">
		
			<div class="backfff color-333 padding5 text-center content-martop10 relative">
				AlexanderG
				<div class="vipActive vip" id="vipcheck">
					v1						
				</div>
			</div>
			
			<div class="backfff content-boxshow">
				<div class="list-block media-list list-margin ">
					<ul>
						<li>
							<a href="javascript:;" class="item-link" >
								<div class=" item-content">
									<div class="width100  bgcolorcfd padding30 item-inner">
										<div class="item-title-row ">
											<div class="item-title min-font colorfff ">总资产(元)</div>
										</div>
										<div class="item-subtitle content-pad2 colorfff maxs-font" v-text="account.total"></div>
									</div>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
			
			<div class=" backfff content-boxshow content-marbottom10">
				<div class="row no-gutter border-bottom ">
						<div class="col-50 content-padcen">
							<samll class="text-left min-font color-999">可用余额(元)</samll><br/>
							<samll class="max-font color-666" v-text="account.useful"></samll>
						</div>
						<div class="col-50 centerActive">
							<a href="javascript:;">
								<div class="border-left content-padAbout redPackage ">
									<samll class="text-left content-padcen min-font color-999">我的红包(元)</samll><br/>
									<samll class="content-padcen max-font color-666" v-text="account.redbag">0.00</samll>
								</div>
							</a>
						</div>
				</div>
				<div class="row no-gutter">
					<div class="col-50 content-padcen">
						<samll class="text-left min-font color-999">待收总额(元)</samll><br/>
						<samll class="max-font color-666" v-text="account.recieve"></samll>
					</div>
					<div class="col-50  ">
						<div class="border-left content-padAbout">
							<samll class="text-left content-padcen min-font color-999">累计收益(元)</samll><br/>
							<samll class="content-padcen max-font color-666" v-text="account.profit"></samll>
						</div>
					</div>
				</div>
			</div>
			
			<div class="backfff content-boxshow content-marbottom10">
				<div class="row no-gutter">
					<div class="col-25 paddings20 border-right centerActive">
						<a href="javascript:;" > 
							<div class="divBox"> 
								<i class="iconfont icon-mytender colorafff"></i>
							</div>
							<div class="text-center min-font color-333">我的投资</div>
						</a>
					</div>
					<div class="col-25 paddings20  border-right centerActive">
						<a href="javascript:;" class="item-link width100" >
							<div class="divBox"> 
								<i class="iconfont icon-moneylog colorcfb"></i>
							</div> 
							<div class="text-center min-font color-333">资金记录</div>
						</a>
					</div>
					<div class="col-25 paddings20 border-right centerActive">
						<a href="javascript:;" > 
							<div class="divBox">
								<i class="iconfont icon-secure clolordff"></i>
							</div>
							<div class="text-center min-font color-333">安全中心</div>
						</a>
					</div>
					<div class="col-25 paddings20 centerActive">
						<a href="javascript:;" >
							<div class="divBox">
								<i class="iconfont icon-bank colorffc"></i>
							</div>
							<div class="text-center min-font color-333">银行卡</div>
						</a>
					</div>
				</div>
			</div>
			
			<div class="list-block list-margin content-marbottom1 content-boxshow">
				<ul>
					<li class="item-content item-link content-padrights ">
						<a href="javascript:;" class="item-link width100" >
							<div class="item-inner border-bottom relative">
								<div class="item-title color-333 font-14 margin01 ">自动投标</div>
								<span class="newBtn bgcolorff7 border-radius5 margin05 absolute left2 top2">总排名 {{account.allorder}}</span>
								<span class=" left3 top2 absolute newBtn bgcolorff7 border-radius5 margin05">净排名 {{account.cleanorder}}</span>
								<div class="item-after font-14" id="auto-state" state="{{account.auto}}">
									
								</div>						   
							</div>
						</a>
					</li>
					<li class="item-content item-link content-padrights ">
						<a href="javascript:;" class="item-link width100  border-bottom" >
							<div class="item-inner" style="padding-top: .5rem">
								<div class=" color-333">我的邀请</div>
							</div>
						</a>
					</li>
					<li class="item-content item-link content-padrights ">
						<a href="javascript:;" class="item-link width100" >
							<div class="item-inner" style="padding-top: .5rem">
								<div class="color-333">梦想计划</div>
							</div>
						</a>
					</li>
				</ul>
			</div>
			
			<div class="row padding20">
				<div class="col-50">
					<a href="javascript:;" class="button button-big bgcolor-ffb button-warning border-radius max-font">充值</a>
				</div>
				<div class="col-50">
					<a href="javascript:;" class="button button-big  button-fill border-radius max-font">提现</a>
				</div>
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
		name: "user",
		data(){
			return {
				account: {}
			}
		},
		methods: {
			getData(){
				var _self = this;
				var cookies = document.cookie.split(';');
				var token = '';
				for(var i=0; i<cookies.length; i++){
					if(cookies[i].split('=')[0]=='token')break;
				}
				if(i < cookies.length)token = cookies[i].split('=')[1];
				$.ajax({
					url: "/static/data/userAccount.json",
					data: {"token": token},
					dataType: "json",
					success: function(res){
						if(res.code==1){
							_self.account = res.account;
						}
					},
					async: false
				});
			},
			eBind(){
				setTimeout(function(){
					var state = $('#auto-state').attr('state');
					var word = '';
					state=="0" ? word = '已关闭' : word = '已开启';
					$('#auto-state').html(word);
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
				if(!this.isLogin){
					console.log(this.$route.path + ' step now')
					location.href = "/#/login"
				}
				this.getData()
			}
		},
		ready(){
			this.eBind();
			$.init();
		}
	}
</script>