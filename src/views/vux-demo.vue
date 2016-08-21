<template>
	<div class="page">
		<head-back></head-back>
		<div class="content">
			<group>
				<cell title="Vux" value="Cool"></cell>
			</group>
			<group>
				<cell title="Show dialog">
					<x-button type="warn" v-on:click="toggle">Dialog</x-button>
				</cell>
			</group>
			<div class="circle-box">
				<div>
					<circle :percent='percent2' :stroke-width=5 :trail-width=5 :stroke-color='strokeColor2' trail-color="#ddd">
						<span>{{percent2}}%</span>
					</circle>
				</div>
			</div>
			<dialog :show.sync="show" class="dialog-demo">
				<p class="dialog-title" style="padding:0 15px;">
					I'm a Dialog.
					<x-button v-on:click="toggle">OK</x-button>
				</p>
			</dialog>
			<div class="arrow"></div>
			<group>
				<calendar :value.sync="value" title="Date Picker"></calendar>
			</group>
		</div>
	</div>
	<panel></panel>
</template>

<script>
	import headBack from "../components/headBack.vue"
	import panel from "../components/panel.vue"
	import group from 'vux-ui/group'
	import cell from 'vux-ui/cell'
	import xButton from 'vux-ui/x-button'
	import dialog from 'vux-ui/dialog'
	import circle from 'vux-ui/circle'
	import calendar from 'vux-ui/calendar'
	import store from "../vuex/store.js"
	import getters from "../vuex/getters.js"
	export default {
		data(){
			return {
				show: false,
				percent2: 30,
				strokeColor2: '#3FC7FA'
			}
		},
		methods: {
			toggle(){
				this.show = !this.show
			},
			update() {
				this.percent2 = parseInt(Math.random() * 100, 10)
			}
		},
		components: {
			headBack,
			panel,
			group,
			cell,
			dialog,
			xButton,
			circle,
			calendar
		},
		store: store,
		vuex: {
			getters: {
				isLogin: getters.loginStatus
			}
		},
		ready(){
			setInterval(this.update,2000)
			$.init()
		}
	}
</script>

<style>
	@import '~vux/dist/vux.css';
	.circle-box{width:100%;padding:10px 0;background:#fff;margin-top:15px;}
	.circle-box>div{width:100px;height:100px;margin:0 auto;}
	.arrow{width:0;height:0;border-bottom:10px;border-bottom-color:#000;}
</style>