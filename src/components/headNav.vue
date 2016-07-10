<template>
	<header class="bar bar-nav content-boxshow backfff">
        <a class="button button-link button-nav pull-left btn-line"  href="/#/"  data-transition='slide-out'>
            <img src="../assets/jqllogo.svg" alt=""/>
        </a>
        <a class="button button-link button-nav pull-right open-panel btn-line2" data-panel='#panel-right'>
            <i class="icon-naviconround iconfont iconfonts"></i>{{counterValue}}
        </a>
    </header>
</template>

<script>
	export default {
		name: "headNav",
		el: "headNav",
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