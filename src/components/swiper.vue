<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="item in swipes">
				<img width="100%" height="150" v-bind:src="item.src" />
			</div>
		</div>
		<div class="swiper-pagination" style="background:none;"></div>
	</div>
</template>

<script>
	export default {
		name: "swiper",
		el: "swiper",
		data(){
			return {
				swipes: []
			}
		},
		methods: {
			getSwipes(){
				var _self = this
				$.get("/static/data/swipes.json", {"params": 250}, function(data){
					if(data.code==1){
						_self.swipes = data.banner;
						setTimeout(function(){
							$.init();
						});
					}
				},"json")
			}
		},
		components: {
		
		},
		ready(){
			this.getSwipes()
		}
	}
</script>