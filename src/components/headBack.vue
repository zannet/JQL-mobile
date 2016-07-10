<template>
	<header class="bar bar-nav content-boxshow backfff">
        <a class="button button-link button-nav pull-left back color-ffb" href="javascript:history.go(-1);"  data-transition='slide-out'>
            <span class="icon icon-left color-ffb"></span>
            <span class="color-ffb">返回</span>
        </a>
        <a class="button button-link button-nav pull-right open-panel btn-line2" data-panel='#panel-right'>
            <span class="icon-naviconround iconfont iconfonts"></span>
        </a>
	</header>
</template>

<script>
	export default {
		name: "headBack",
		el: "headBack",
		data(){
			return {
				
			}
		},
		methods: {
		
		},
		components: {
		
		}
	}
</script>