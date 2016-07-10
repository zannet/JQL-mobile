<template>
	<div class="page">
		
		<head-back></head-back>
		
		<div class="content ">
			<div class="list-block content-martop10 content-marbottom10 content-boxshow">
				<ul>
					<li>
						<div class="item-content  border-bottom content-padrights" >
							<div class="marginauto color-333">
								<em class="colorffb">验证手机号</em> &gt; <em class="color-333">设置账户信息</em>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="list-block list-margin content-martop10 content-boxshow">
				<ul>
					<li>
						<div class="item-content content-padrights" >
							<div class="item-inner border-bottom">
								<div class="item-title label color-333 font-14">手机号</div>
								<div class="item-input" >
									<input type="text" id="phones" v-model="phones" placeholder="确保您的手机能正确收到验证码" />
								</div>
							</div>
						</div>
						<div class="item-content content-padrights" >
							<div class="item-inner border-bottom">
								<div class="item-title label color-333 font-14">验证码</div>
								<div class="item-input" >
									<input type="text" name="valicode" id="phonecodes" placeholder="请输入手机验证码"/>
								</div>
								<a class="pull-left colorfff bgcolor-cfd content-pad10about1 border-radius5 font-14 checkCode text-center"  id="codeIphone">获取验证码</a>
							</div>
						</div>
					</li>
					<li>
						<div class="item-content content-padrights" >
							<div class="">
								<label class="label-checkbox pull-left">
									<input type="checkbox" id="agreement" checked name="my-radio"/>
									<div class="item-media padding00"><i class="icon icon-form-checkbox"></i></div>
								</label>
								<div class="pull-left margin1eft5"> 我已阅读并同意<em class="color-cfd">《金桥梁服务协议》</em></div>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="padding20">
				<a  id="register_i" class="button button-big button-light bgcolor-cfd colorfff" external>下一步</a>
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
		name: "register1",
		data(){
			return {
				phones: '',
				phonecodes: ''
			}
		},
		methods: {
			eBind(){
				var _csrf = $('meta[name="csrf-token"]').attr("content");
				
				var tel_exp = /^1[3|4|5|7|8]\d{9}$/;
				var vali_exp = /^\d{6}$/;
				
				function testCell(){
					var content = $('#phones').val();
					if(content == ""){
						$.toast("请填写手机号");
						return false;
					}else if(!tel_exp.test(content)) {
						$.toast("请正确填写手机号");
						return false;
					}else{
						//手机号后台查重
						var ajaxReturn = true;
						/*$.ajax({
							url:'/verify/checkphone',
							type:'post',
							data:{"_csrf":_csrf,"phone":content},
							dataType:'json',
							success:function(msg){
								if(msg.code==1){
									ajaxReturn = true;
								}else{
									$.toast('该手机号已被注册');
								}
							},
							async:false,
							cache:false
						});*/
						return ajaxReturn;
					}  
				}
				
				function testVali() {
					var content = $('#phonecodes').val();
					if (content == "") {
						$.toast("请输入验证码");
						return false;
					} else if (!vali_exp.test(content)) {
						$.toast("验证码为6位数字");
						return false;
					} else
						return true;
				}
				
				var flag = true;
				function waitMinute(){
					flag = false;
					var i = 60;
					var timer = setInterval(function(){
						i--;
						$('.checkCode').removeClass('bgcolor-cfd').addClass('bgcolor-d3').html(i+'秒重获取');
						if(i<=0){
							clearInterval(timer);
							$('.checkCode').removeClass('bgcolor-d3').addClass('bgcolor-cfd').html('获取验证码');
							flag = true;
						}
					},1000);
				}
				
				$('#phones').blur(testCell);
				
				$('#phonecodes').blur(testVali);
				
				$('#codeIphone').click(function(){
					if(testCell()==true && flag==true){
						var phone = $('#phones').val();
						/*$.ajax({
							url:'/verify/sendsms',
							type:'post',
							data:{"_csrf":_csrf,"phone":phone},
							dataType:'json',
							async: false,
							success:function(msg){
								if(msg.code==1){
									$.toast('短信已发送');
									waitMinute();
								}else{
									$.toast(msg.message);
								}
							},
							cache:false
						});*/
						$.toast('短信已发送');
						waitMinute();
					}
				});
				
				$('#register_i').click(function(){
					if(testCell()==true && testVali()==true){
						if($('#agreement:checked').length!==1){
							$.toast("请同意服务协议");
							return;
						}
						var phone = $('#phones').val();
						var valicode = $('#phonecodes').val();
						/*$.ajax({
							url:'',
							type:'post',
							data:{"_csrf":_csrf,"phone":phone,"valicode":valicode},
							dataType:'json',
							async: false,
							success:function(msg){
								if(msg.code==1){
									location.href = "/#/register2";
								}else{
									$.toast(msg.message);
								}
							},
							cache:false
						});*/
						location.href = "/#/register2";
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
			}
		},
		route: {
			data(){
				if(this.isLogin)location.href = "/#/";
				this.phones = '';
				this.phonecodes = '';
			}
		},
		ready(){
			this.eBind() 
			$.init()
		}
	}
</script>