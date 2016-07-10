<template>
	<footer class="backfff content-martop10 content-padTwenty">
        <div class="paddAbouts">
            <div class="row min-font  no-gutter">
                <div class="col-25"><a href="/#/login" class="color-666" external>登录</a></div>
                <div class="col-25"><a href="/#/register1" class="color-666" external>注册</a></div>
                <div class="col-25"><a href="https://www.jql.cn/" class="color-666" external>切换电脑版</a></div>
                <div class="col-25 text-right"><a class="color-666" href="javascript:;" external v-on:click="returnTop">回到顶部</a></div>
            </div>

        </div>
        <div class="text-center content-padt5 fonts" class="color-999">&copy; 2014-2016 金桥梁 JQL.CN 版权所有</div>
    </footer>
</template>

<script>
	export default {
		name: "projects",
		el: "projects",
		data(){
			return {
				items: []
			}
		},
		methods: {
			returnTop(){
				window.scrollTo(0,0);
			}
		},
		components: {
		
		},
		ready(){
		
		}
	}
</script>