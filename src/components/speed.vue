<template>
	<div class="content-padright">
		<div class="speed">
			<div class="timer" style="width:{{pgs}}"></div>
		</div>
		<span class="pull-left min-font content-pad5 color-bf">可投<em class="color-ffb" v-text="remain"></em>元</span>
		<span class="pull-right min-font content-pad5 color-bf" v-text="pgs"></span>
	</div>
</template>

<script>
	export default {
		name: "speed",
		el: "speed",
		props: ['pgs','remain'],
		data(){
			return {
			
			}
		},
		methods: {
			
		},
		components: {
		
		},
		ready(){
			
		}
	}
</script>